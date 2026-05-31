"use client";
import React, { useEffect, useRef } from 'react';

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
    const numberOfParticles = window.innerWidth < 768 ? 40 : 80;

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
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() * 1) - 0.5;
        this.speedY = (Math.random() * 1) - 0.5;
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
        ctx.fillStyle = '#22D3EE';
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

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 120})`;
            ctx.lineWidth = 1;
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
    <section className="relative min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden">
      
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/bg-image.png"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dynamic Overlay Particles Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 opacity-50 pointer-events-none" 
      />

      {/* Hero Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto w-full pt-12">
        
        {/* Luxury Top Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111827]/60 backdrop-blur-md border border-[#1E293B] shadow-[0_0_15px_rgba(34,211,238,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#22D3EE]">
            ISBLEX Illumination Systems
          </span>
        </div>

        {/* High-End Brand Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.1] mb-6">
          Sculpt Your Space. <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3B82F6] via-[#22D3EE] to-[#818cf8] drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
            Command the Aura.
          </span>
        </h1>

        {/* Premium Description Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Architectural-grade smart ambient systems designed to redefine spatial limits. Synthesize over 16 million synchronized spectral hues smoothly with a single touch or vocal protocol.
        </p>

        {/* Elite CTA Buttons Setup */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto gap-4 md:gap-6">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-[#F8FAFC] text-xs font-semibold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transform hover:-translate-y-0.5">
            Discover the Systems
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-[#111827]/40 backdrop-blur-sm border border-[#1E293B] text-[#F8FAFC] hover:border-[#22D3EE] hover:text-[#22D3EE] text-xs font-semibold tracking-widest uppercase rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg">
            Request Consultation
          </button>
        </div>

        {/* Minimalist Trust Metrics */}
        <div className="mt-16 pt-8 border-t border-[#1e293b]/40 w-full flex items-center justify-center gap-8 md:gap-12 text-[11px] tracking-widest text-[#64748B] uppercase font-medium flex-wrap">
          <span className="flex items-center gap-2.5">
            <span className="w-1 h-1 rounded-full bg-[#22D3EE]" />
            Global Express Logistics
          </span>
          <span className="flex items-center gap-2.5">
            <span className="w-1 h-1 rounded-full bg-[#22D3EE]" />
            5-Year Architectural Warranty
          </span>
          <span className="flex items-center gap-2.5">
            <span className="w-1 h-1 rounded-full bg-[#22D3EE]" />
            Encrypted Checkout Protocols
          </span>
        </div>

      </div>
    </section>
  );
}
