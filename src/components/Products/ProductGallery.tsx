"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";

interface ProductGalleryProps {
  images: string[];
  videos: string[];
  title: string;
}

export default function ProductGallery({ images = [], videos = [], title }: ProductGalleryProps) {
  const allMedia = [...images, ...videos];
  
  // Direct initialization from array instead of empty string ""
  const [activeMedia, setActiveMedia] = useState<string>(() => allMedia[0] || "");
  const [isHovering, setIsHovering] = useState(false);
  
  const [lensStyle, setLensStyle] = useState<React.CSSProperties>({});
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isVideo = (url: string) => url?.match(/\.(mp4|webm|ogg)$/i) || url?.includes("video");

  // Sync active media if parent props change dynamically later
  useEffect(() => {
    if (allMedia.length > 0) {
      setActiveMedia(allMedia[0]);
    }
  }, [images, videos]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!activeMedia || isVideo(activeMedia) || !containerRef.current) return;

    const container = containerRef.current;
    const { left, top, width, height } = container.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const lensWidth = Math.min(150, width / 2);
    const lensHeight = Math.min(150, height / 2);

    let lensX = mouseX - lensWidth / 2;
    let lensY = mouseY - lensHeight / 2;

    if (lensX < 0) lensX = 0;
    if (lensX > width - lensWidth) lensX = width - lensWidth;
    if (lensY < 0) lensY = 0;
    if (lensY > height - lensHeight) lensY = height - lensHeight;

    setLensStyle({
      left: `${lensX}px`,
      top: `${lensY}px`,
      width: `${lensWidth}px`,
      height: `${lensHeight}px`,
      display: "block",
    });

    const zoomX = (lensX / (width - lensWidth)) * 100;
    const zoomY = (lensY / (height - lensHeight)) * 100;

    setZoomStyle({
      backgroundImage: `url(${activeMedia})`,
      backgroundPosition: `${zoomX}% ${zoomY}%`,
      backgroundSize: `${(width / lensWidth) * 100}%`, 
    });
  };

  // Guard clause styled with Prifya luxury cream empty state
  if (allMedia.length === 0) {
    return (
      <div className="w-full aspect-square bg-[#FDFBF7] border border-[#D0C9BC]/40 rounded-xl flex items-center justify-center text-xs font-sans text-[#3E2A20]/50 tracking-widest uppercase">
        No Media Available
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 relative items-start w-full max-w-full overflow-visible font-sans">
      
      {/* 1. Responsive Thumbnails List */}
      <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-20 shrink-0 h-auto lg:h-[500px] overflow-x-auto lg:overflow-y-auto overflow-y-hidden lg:overflow-x-hidden pb-2 lg:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {allMedia.map((mediaUrl, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveMedia(mediaUrl)}
            onClick={() => setActiveMedia(mediaUrl)}
            className={`aspect-square w-16 sm:w-20 lg:w-full border rounded-lg overflow-hidden cursor-pointer shrink-0 transition-all duration-300 ${
              activeMedia === mediaUrl 
                ? "border-[#8A9A86] shadow-[0_4px_12px_rgba(138,154,134,0.15)] scale-95" 
                : "border-[#D0C9BC]/30 opacity-70 hover:opacity-100 hover:border-[#8A9A86]/50"
            }`}
          >
            {isVideo(mediaUrl) ? (
              // Premium video thumbnail indicator
              <div className="w-full h-full bg-[#FDFBF7] flex flex-col items-center justify-center text-[10px] text-[#8A9A86] font-sans font-medium tracking-widest">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mb-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                VIDEO
              </div>
            ) : (
              <img src={mediaUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" loading="lazy" />
            )}
          </div>
        ))}
      </div>

      {/* 2. Main Display Stage Area */}
      <div 
        ref={containerRef}
        className="relative flex-1 w-full aspect-square bg-white border border-[#D0C9BC]/30 rounded-xl overflow-hidden cursor-crosshair select-none"
        onMouseEnter={() => activeMedia && !isVideo(activeMedia) && setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {activeMedia && isVideo(activeMedia) ? (
          <div className="w-full h-full bg-black">
            <video src={activeMedia} controls className="w-full h-full object-contain" autoPlay muted playsInline />
          </div>
        ) : activeMedia ? (
          <>
            <img
              src={activeMedia}
              alt={title || "Product Display Asset"}
              className="w-full h-full object-contain pointer-events-none"
            />
            
            {/* Prifya elegant Sage Green overlay lens selector */}
            {isHovering && (
              <div 
                className="absolute bg-[#8A9A86]/5 border border-[#8A9A86]/40 pointer-events-none backdrop-blur-[0.5px]"
                style={lensStyle}
              />
            )}
          </>
        ) : null}
      </div>

      {/* 3. Professional Zoom Panel Stage Layout */}
      {isHovering && activeMedia && !isVideo(activeMedia) && (
        <div 
          className="absolute top-0 left-[103%] w-full h-full bg-white border border-[#D0C9BC]/40 shadow-[0_15px_40px_rgba(62,42,32,0.06)] rounded-xl z-50 pointer-events-none hidden lg:block overflow-hidden"
          style={{
            ...zoomStyle,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

    </div>
  );
}