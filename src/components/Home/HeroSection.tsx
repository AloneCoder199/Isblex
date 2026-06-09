"use client";
import React, { useEffect, useRef } from 'react';
        import Link from 'next/link'
interface ParticleInstance {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  update: () => void;
  draw: () => void;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particlesArray: ParticleInstance[] = [];
    const numberOfParticles = window.innerWidth < 768 ? 30 : 60;

    class Particle implements ParticleInstance {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        const currentCanvas = canvasRef.current;
        const width = currentCanvas ? currentCanvas.width : window.innerWidth;
        const height = currentCanvas ? currentCanvas.height : window.innerHeight;

        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() * 0.5) - 0.25;
        this.speedY = (Math.random() * 0.5) - 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        const currentCanvas = canvasRef.current;
        if (!currentCanvas) return;

        if (this.x < 0 || this.x > currentCanvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > currentCanvas.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        // Luxury Gold Color for Particles (#B89B72)
        ctx.fillStyle = '#B89B72';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(184, 155, 114, ${0.4 - distance / 250})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // Background updated to Cream/Beige (#FDFBF7)
    <section className="relative min-h-screen flex items-center justify-center bg-[#FDFBF7] overflow-hidden ">
      
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hair-after.png"
        // 🛠️ Optimization: Opacity slightly reduced to 30% and mix-blend removed for better contrast with dark text on light bg
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* 🛠️ NEW: Subtle Vignette Overlay for Readability */}
      {/* Ye content ke peechay ek halka sa gradient add karta hai taake text clear nazar aaye */}
      <div className="absolute inset-0 z-10 bg-radial-gradient from-transparent via-[#FDFBF7]/50 to-[#FDFBF7]/80 pointer-events-none" />

      {/* Dynamic Overlay Particles Layer (Gold Dust) */}
      <canvas 
        ref={canvasRef} 
        // 🛠️ Optimization: Opacity reduced to 50% so they don't fight with text
        className="absolute inset-0 z-20 opacity-50 pointer-events-none" 
      />

      {/* Hero Content Layer */}
      {/* 🛠️ Z-index increased to 30 to stay on top of all overlays */}
      <div className="relative z-30 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto w-full pt-12">
        
        {/* Luxury Top Badge */}
        {/* 🛠️ Added shadow-md and slightly more opaque bg for contrast */}
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#B89B72]/40 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8A9A86] animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#3E2A20]">
            Prifya Premium Cosmetics
          </span>
        </div>

        {/* High-End Brand Headline */}
        {/* 🛠️ Increased font weight and text color is now solid Dark Brown for max readability */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#3E2A20] tracking-tight leading-[1.15] mb-6 drop-shadow-sm">
          Embrace Your <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8A9A86] via-[#B89B72] to-[#8A9A86]">
            Natural Radiance.
          </span>
        </h1>

        {/* Premium Description Paragraph */}
        {/* 🛠️ Text color made slightly darker (opacity 90%) for better contrast */}
        <p className="text-sm sm:text-base md:text-lg text-[#3E2A20]/90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Experience the pure essence of nature with our dermatologist-crafted formulas. Rejuvenate, protect, and glow with ingredients designed to honor your skin's true beauty.
        </p>

      

<div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto gap-4 md:gap-6">
  {/* Products Page Link */}
  <Link href="/products" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto px-8 py-4 bg-[#8A9A86] hover:bg-[#6A8F67] text-[#FDFBF7] text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#8A9A86]/50 transform hover:-translate-y-0.5">
      Shop Collection
    </button>
  </Link>
  
  {/* Contact Page Link */}
  <Link href="/contact" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto px-8 py-4 bg-[#FDFBF7]/50 backdrop-blur-sm border-2 border-[#B89B72] text-[#3E2A20] hover:bg-[#B89B72] hover:text-[#FDFBF7] text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm">
      Skin Consultation
    </button>
  </Link>
</div>


        {/* Minimalist Trust Metrics */}
        {/* 🛠️ Border color darkened for visibility, font weight increased */}
        <div className="mt-16 pt-8 border-t border-[#D0C9BC] w-full flex items-center justify-center gap-8 md:gap-12 text-[11px] tracking-widest text-[#3E2A20]/80 uppercase font-bold flex-wrap">
          <span className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72]" />
            100% Organic
          </span>
          <span className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72]" />
            Dermatologist Tested
          </span>
          <span className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72]" />
            Cruelty-Free
          </span>
        </div>

      </div>
    </section>
  );
}