import { useState, useCallback } from 'react';
import { cloudinaryService } from '../services/cloudinaryService';
import { IMAGE_UPLOAD_CONFIG } from '../utils/constants';

export const useImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const uploadImage = useCallback(async (file, options = {}) => {
    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const result = await cloudinaryService.uploadFile(file, {
        folder: options.folder || IMAGE_UPLOAD_CONFIG.CLOUDINARY.FOLDER_STRUCTURE.COMMUNITIES,
        tags: options.tags || [],
        ...options,
      });

      clearInterval(progressInterval);
      setProgress(100);

      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setUploading(false);
      setTimeout(() => setProgress(0), 1000);
    }
  }, []);

  const uploadMultiple = useCallback(async (files, options = {}) => {
    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      const results = await cloudinaryService.uploadMultiple(files, options);
      setProgress(100);
      return results;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setUploading(false);
      setTimeout(() => setProgress(0), 1000);
    }
  }, []);

  const getOptimizedUrl = useCallback((publicId, transformation) => {
    return cloudinaryService.getOptimizedUrl(publicId, transformation);
  }, []);

  return {
    uploadImage,
    uploadMultiple,
    getOptimizedUrl,
    uploading,
    progress,
    error,
    clearError: () => setError(null),
  };
};