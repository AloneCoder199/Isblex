"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";

interface ProductGalleryProps {
  images: string[];
  videos: string[];
  title: string;
}

export default function ProductGallery({ images = [], videos = [], title }: ProductGalleryProps) {
  const allMedia = [...images, ...videos];
  
  // 🔥 FIX 1: Direct initialization from array instead of empty string ""
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

  // Guard clause styled with mono dark theme
  if (allMedia.length === 0) {
    return (
      <div className="w-full aspect-square bg-[#09090B] border border-zinc-900 rounded-md flex items-center justify-center text-[10px] font-mono text-zinc-500 tracking-wider">
        // NO_MEDIA_AVAILABLE
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 relative items-start w-full max-w-full overflow-visible">
      
      {/* 1. Responsive Thumbnails List */}
      <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-20 shrink-0 h-auto lg:h-[500px] overflow-x-auto lg:overflow-y-auto overflow-y-hidden lg:overflow-x-hidden pb-2 lg:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {allMedia.map((mediaUrl, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveMedia(mediaUrl)}
            onClick={() => setActiveMedia(mediaUrl)}
            className={`aspect-square w-16 sm:w-20 lg:w-full border rounded-md overflow-hidden cursor-pointer shrink-0 transition-all ${
              activeMedia === mediaUrl 
                ? "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)] scale-95" 
                : "border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600"
            }`}
          >
            {isVideo(mediaUrl) ? (
              <div className="w-full h-full bg-[#09090B] flex flex-col items-center justify-center text-[9px] text-cyan-500 font-mono tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 mb-0.5">
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
        className="relative flex-1 w-full aspect-square bg-[#09090B] border border-zinc-900 rounded-md overflow-hidden cursor-crosshair select-none"
        onMouseEnter={() => activeMedia && !isVideo(activeMedia) && setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {activeMedia && isVideo(activeMedia) ? (
          <div className="w-full h-full bg-black">
            <video src={activeMedia} controls className="w-full h-full object-contain" autoPlay muted playsInline />
          </div>
        ) : activeMedia ? (
          /* 🔥 FIX 2: Safe conditional logic wrapping the image tag */
          <>
            <img
              src={activeMedia}
              alt={title || "Product Display Asset"}
              className="w-full h-full object-contain pointer-events-none"
            />
            
            {/* Cyber style overlay lens selector */}
            {isHovering && (
              <div 
                className="absolute bg-cyan-500/10 border border-cyan-500 pointer-events-none"
                style={lensStyle}
              />
            )}
          </>
        ) : null}
      </div>

      {/* 3. Professional Zoom Panel Stage Layout */}
      {isHovering && activeMedia && !isVideo(activeMedia) && (
        <div 
          className="absolute top-0 left-[103%] w-full h-full bg-[#09090B] border border-zinc-900 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-md z-50 pointer-events-none hidden lg:block overflow-hidden"
          style={{
            ...zoomStyle,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

    </div>
  );
}