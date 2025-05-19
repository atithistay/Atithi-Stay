'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function PGImageGallery({ images, videos, name }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  
  const allMedia = [...images, ...(videos || [])];
  
  const isVideo = (index) => index >= images.length;
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + allMedia.length) % allMedia.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % allMedia.length);
  };
  
  const openLightbox = (index) => {
    setActiveIndex(index);
    setShowLightbox(true);
  };

  return (
    <>
      <div className="relative bg-white rounded-lg overflow-hidden shadow">
        <div className="h-[400px] relative">
          {isVideo(activeIndex) ? (
            <video 
              src={allMedia[activeIndex]?.url} 
              controls 
              className="h-full w-full object-cover" 
              alt={`${name} video`}
            />
          ) : (
            <Image
              src={allMedia[activeIndex]?.url || '/images/placeholder.jpg'}
              alt={`${name} image ${activeIndex + 1}`}
              fill
              className="object-cover cursor-pointer"
              onClick={() => openLightbox(activeIndex)}
            />
          )}
        </div>
        
        {allMedia.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
              aria-label="Next image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        {allMedia.length > 1 && (
          <div className="py-3 px-4 overflow-x-auto">
            <div className="flex space-x-2">
              {allMedia.map((media, index) => (
                <div 
                  key={index}
                  className={`relative h-16 w-24 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${
                    activeIndex === index ? 'ring-2 ring-indigo-600' : ''
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {isVideo(index) ? (
                    <div className="relative h-full w-full bg-gray-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={media?.url || '/images/placeholder.jpg'}
                      alt={`${name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-gray-800 rounded-full"
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative h-[80vh] w-[80vw] max-w-5xl">
            {!isVideo(activeIndex) && (
              <Image
                src={allMedia[activeIndex]?.url || '/images/placeholder.jpg'}
                alt={`${name} image ${activeIndex + 1}`}
                fill
                className="object-contain"
              />
            )}
          </div>
          
          {allMedia.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/80"
                aria-label="Previous image"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/80"
                aria-label="Next image"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';

// export default function PGImageGallery({ images, videos, name }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showLightbox, setShowLightbox] = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);
//   const [showVideo, setShowVideo] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState('');

//   const allMedia = [...images, ...(videos || [])];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === allMedia.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? allMedia.length - 1 : prevIndex - 1
//     );
//   };

//   const openLightbox = (index) => {
//     setLightboxIndex(index);
//     setShowLightbox(true);
//   };

//   const closeLightbox = () => {
//     setShowLightbox(false);
//   };

//   const playVideo = (videoUrl) => {
//     setCurrentVideo(videoUrl);
//     setShowVideo(true);
//   };

//   return (
//     <div className="relative">
//       {/* Main Gallery */}
//       <div className="relative h-[50vh] md:h-[60vh] w-full bg-gray-100 rounded-lg overflow-hidden">
//         {allMedia[currentIndex]?.type === 'video' ? (
//           <div 
//             className="h-full w-full flex items-center justify-center bg-gray-900 cursor-pointer"
//             onClick={() => playVideo(allMedia[currentIndex].url)}
//           >
//             <Play size={64} className="text-white opacity-80" />
//             <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
//               Video
//             </div>
//           </div>
//         ) : (
//           <Image
//             src={allMedia[currentIndex]?.url || '/placeholder-pg.jpg'}
//             alt={`${name} - Image ${currentIndex + 1}`}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 75vw"
//             className="object-cover cursor-pointer"
//             onClick={() => openLightbox(currentIndex)}
//             priority
//           />
//         )}
        
//         <button 
//           className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
//           onClick={prevSlide}
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>
        
//         <button 
//           className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
//           onClick={nextSlide}
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>
        
//         <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
//           {currentIndex + 1} / {allMedia.length}
//         </div>
//       </div>
      
//       {/* Thumbnail Row */}
//       <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
//         {allMedia.map((item, index) => (
//           <div 
//             key={index}
//             className={`relative flex-shrink-0 h-20 w-20 md:h-24 md:w-24 rounded cursor-pointer ${
//               currentIndex === index ? 'ring-2 ring-blue-500' : ''
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           >
//             {item.type === 'video' ? (
//               <div className="h-full w-full flex items-center justify-center bg-gray-900 rounded">
//                 <Play size={24} className="text-white" />
//               </div>
//             ) : (
//               <Image
//                 src={item.url}
//                 alt={`${name} - Thumbnail ${index + 1}`}
//                 fill
//                 sizes="96px"
//                 className="object-cover rounded"
//               />
//             )}
//           </div>
//         ))}
//       </div>
      
//       {/* Lightbox */}
//       {showLightbox && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
//           <button 
//             className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
//             onClick={closeLightbox}
//           >
//             <X size={24} />
//           </button>
          
//           <div className="relative h-[80vh] w-[90vw] md:w-[80vw]">
//             <Image
//               src={allMedia[lightboxIndex]?.url || '/placeholder-pg.jpg'}
//               alt={`${name} - Fullscreen Image`}
//               fill
//               sizes="90vw"
//               className="object-contain"
//             />
//           </div>
          
//           <button 
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
//             onClick={() => setLightboxIndex(prev => prev === 0 ? allMedia.length - 1 : prev - 1)}
//           >
//             <ChevronLeft className="h-8 w-8 text-white" />
//           </button>
          
//           <button 
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
//             onClick={() => setLightboxIndex(prev => prev === allMedia.length - 1 ? 0 : prev + 1)}
//           >
//             <ChevronRight className="h-8 w-8 text-white" />
//           </button>
          
//           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
//             {lightboxIndex + 1} / {allMedia.length}
//           </div>
//         </div>
//       )}
      
//       {/* Video Modal */}
//       {showVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
//           <button 
//             className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
//             onClick={() => setShowVideo(false)}
//           >
//             <X size={24} />
//           </button>
          
//           <div className="relative w-[90vw] md:w-[80vw] aspect-video">
//             <video 
//               src={currentVideo} 
//               controls 
//               autoPlay 
//               className="w-full h-full"
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }