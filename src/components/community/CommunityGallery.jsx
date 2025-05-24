import React, { useState } from 'react';

const CommunityGallery = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Default gallery if none provided
  const defaultGallery = [
    {
      id: 1,
      url: "https://readdy.ai/api/search-image?query=African%20tech%20community%20meetup%20in%20Cameroon%2C%20diverse%20group%20of%20developers%20networking%20and%20collaborating%2C%20modern%20tech%20space%2C%20professional%20atmosphere&width=400&height=300&seq=gallery1&orientation=landscape",
      alt: "Community Meetup",
      title: "Monthly Developer Meetup"
    },
    {
      id: 2,
      url: "https://readdy.ai/api/search-image?query=Tech%20workshop%20in%20Cameroon%2C%20African%20developers%20learning%20and%20coding%20together%2C%20laptops%20and%20screens%2C%20collaborative%20environment&width=400&height=300&seq=gallery2&orientation=landscape",
      alt: "Workshop Session",
      title: "Hands-on Workshop"
    },
    {
      id: 3,
      url: "https://readdy.ai/api/search-image?query=Hackathon%20event%20in%20Cameroon%2C%20teams%20of%20African%20developers%20working%20intensively%20on%20projects%2C%20modern%20tech%20venue%2C%20competitive%20atmosphere&width=400&height=300&seq=gallery3&orientation=landscape",
      alt: "Hackathon Event",
      title: "Annual Hackathon"
    },
    {
      id: 4,
      url: "https://readdy.ai/api/search-image?query=Tech%20conference%20presentation%20in%20Cameroon%2C%20African%20speaker%20presenting%20to%20an%20engaged%20tech%20audience%2C%20professional%20stage%20setup&width=400&height=300&seq=gallery4&orientation=landscape",
      alt: "Conference Presentation",
      title: "Tech Conference"
    }
  ];

  const images = gallery || defaultGallery;

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (images.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Community Gallery</h3>
        <div className="text-center py-8">
          <i className="ri-image-line text-gray-300 text-4xl mb-4"></i>
          <p className="text-gray-500">No photos available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Community Gallery</h3>
          <button className="text-[var(--primary)] text-sm font-medium hover:underline">
            View All Photos
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id || index}
              className="relative group cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-24 object-cover rounded-lg transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                <i className="ri-zoom-in-line text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </div>
            </div>
          ))}
        </div>
        
        {images.length > 8 && (
          <div className="mt-4 text-center">
            <button className="px-4 py-2 text-[var(--primary)] text-sm font-medium hover:underline">
              + View {images.length - 8} more photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl z-10 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70"
            >
              <i className="ri-close-line"></i>
            </button>
            
            <img 
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {selectedImage.title && (
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h4 className="text-lg font-semibold">{selectedImage.title}</h4>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CommunityGallery;