import { IMAGE_UPLOAD_CONFIG } from '../utils/constants';

class CloudinaryService {
  constructor() {
    this.cloudName = IMAGE_UPLOAD_CONFIG.CLOUDINARY.CLOUD_NAME;
    this.uploadPreset = IMAGE_UPLOAD_CONFIG.CLOUDINARY.UPLOAD_PRESET;
    this.apiKey = IMAGE_UPLOAD_CONFIG.CLOUDINARY.API_KEY;
    this.baseUrl = `https://api.cloudinary.com/v1_1/${this.cloudName}`;
  }

  /**
   * Upload a single file to Cloudinary
   * @param {File} file - The file to upload
   * @param {Object} options - Upload options
   * @returns {Promise<Object>} - Upload result
   */
  async uploadFile(file, options = {}) {
    try {
      // Validate file
      this.validateFile(file);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', this.uploadPreset);
      
      // Add optional parameters
      if (options.folder) {
        formData.append('folder', options.folder);
      }
      
      if (options.publicId) {
        formData.append('public_id', options.publicId);
      }

      if (options.tags) {
        formData.append('tags', options.tags.join(','));
      }

      const response = await fetch(`${this.baseUrl}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      return this.formatResponse(result);
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw this.handleUploadError(error);
    }
  }

  /**
   * Upload multiple files
   * @param {FileList|Array} files - Files to upload
   * @param {Object} options - Upload options
   * @returns {Promise<Array>} - Array of upload results
   */
  async uploadMultiple(files, options = {}) {
    const uploadPromises = Array.from(files).map(file => 
      this.uploadFile(file, options)
    );

    try {
      return await Promise.all(uploadPromises);
    } catch (error) {
      console.error('Multiple upload error:', error);
      throw error;
    }
  }

  /**
   * Generate optimized image URL
   * @param {string} publicId - Cloudinary public ID
   * @param {string} transformation - Transformation preset
   * @returns {string} - Optimized image URL
   */
  getOptimizedUrl(publicId, transformation = 'MEDIUM') {
    if (!publicId) return null;
    
    const transformationString = IMAGE_UPLOAD_CONFIG.CLOUDINARY.TRANSFORMATIONS[transformation];
    return `https://res.cloudinary.com/${this.cloudName}/image/upload/${transformationString}/${publicId}`;
  }

  /**
   * Delete image from Cloudinary
   * @param {string} publicId - Public ID of the image to delete
   * @returns {Promise<Object>} - Deletion result
   */
  async deleteImage(publicId) {
    try {
      const timestamp = Math.round(new Date().getTime() / 1000);
      const signature = this.generateSignature(publicId, timestamp);

      const formData = new FormData();
      formData.append('public_id', publicId);
      formData.append('api_key', this.apiKey);
      formData.append('timestamp', timestamp);
      formData.append('signature', signature);

      const response = await fetch(`${this.baseUrl}/image/destroy`, {
        method: 'POST',
        body: formData,
      });

      return await response.json();
    } catch (error) {
      console.error('Cloudinary delete error:', error);
      throw error;
    }
  }

  /**
   * Validate file before upload
   * @param {File} file - File to validate
   */
  validateFile(file) {
    const { MAX_FILE_SIZE, ALLOWED_FORMATS } = IMAGE_UPLOAD_CONFIG.CLOUDINARY;

    if (file.size > MAX_FILE_SIZE) {
      throw new Error(IMAGE_UPLOAD_CONFIG.UPLOAD_ERRORS.FILE_TOO_LARGE);
    }

    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (!ALLOWED_FORMATS.includes(fileExtension)) {
      throw new Error(IMAGE_UPLOAD_CONFIG.UPLOAD_ERRORS.INVALID_FORMAT);
    }
  }

  /**
   * Format Cloudinary response
   * @param {Object} result - Raw Cloudinary response
   * @returns {Object} - Formatted response
   */
  formatResponse(result) {
    return {
      publicId: result.public_id,
      secureUrl: result.secure_url,
      url: result.url,
      format: result.format,
      width: result.width,
      height: result.height,
      bytes: result.bytes,
      createdAt: result.created_at,
      folder: result.folder,
      tags: result.tags || [],
    };
  }

  /**
   * Handle upload errors
   * @param {Error} error - Original error
   * @returns {Error} - Formatted error
   */
  handleUploadError(error) {
    if (error.message.includes('File size')) {
      return new Error(IMAGE_UPLOAD_CONFIG.UPLOAD_ERRORS.FILE_TOO_LARGE);
    }
    
    if (error.message.includes('format')) {
      return new Error(IMAGE_UPLOAD_CONFIG.UPLOAD_ERRORS.INVALID_FORMAT);
    }
    
    if (error.message.includes('network') || error.message.includes('fetch')) {
      return new Error(IMAGE_UPLOAD_CONFIG.UPLOAD_ERRORS.NETWORK_ERROR);
    }
    
    return new Error(IMAGE_UPLOAD_CONFIG.UPLOAD_ERRORS.UPLOAD_FAILED);
  }

  /**
   * Generate signature for secure operations (requires backend)
   * @param {string} publicId - Public ID
   * @param {number} timestamp - Timestamp
   * @returns {string} - Signature
   */
  generateSignature(publicId, timestamp) {
    // Note: In production, this should be done on your backend
    // This is a simplified version for client-side operations
    return `${publicId}${timestamp}`;
  }
}

// Export singleton instance
export const cloudinaryService = new CloudinaryService();
export default cloudinaryService;