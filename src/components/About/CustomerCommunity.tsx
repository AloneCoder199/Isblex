"use client";
import React from 'react';

export default function CustomerCommunity() {
  const socialFeed = [
    {
      id: "feed_1",
      type: "TikTok Content",
      username: "@cyber_setup_labs",
      metric: "1.2M Views",
      title: "Epic Matrix Overhaul",
      bgImage: "/images/feed-1.png",
      accent: "border-cyan-500/30"
    },
    {
      id: "feed_2",
      type: "Workspace Photo",
      username: "@dev_matrix_v4",
      metric: "45K Likes",
      title: "Late Night Coding Frame",
      bgImage: "/images/feed-2.png",
      accent: "border-zinc-800"
    },
    {
      id: "feed_3",
      type: "TikTok Content",
      username: "@battlestation_core",
      metric: "890K Views",
      title: "RGB Corner Sync Review",
      bgImage: "/images/feed-3.png",
      accent: "border-cyan-500/30"
    },
    {
      id: "feed_4",
      type: "Customer Setup",
      username: "@minimal_ambient",
      metric: "12K Saves",
      title: "Bedroom Mood Calibration",
      bgImage: "/images/feed-4.png",
      accent: "border-zinc-800"
    }
  ];

  return (
    <section 
      id="customer-community" 
      className="relative bg-[#09090B] text-[#F8FAFC] py-24 lg:py-32 px-4 md:px-8 overflow-hidden border-b border-zinc-900 select-none"
    >
      {/* ── METRIC GLOW ELEMENTS ── */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= STRATEGIC GRID HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-[#22D3EE] text-[10px] font-mono tracking-widest uppercase">
              // GLOBAL SYNCHRONIZATION //
            </div>
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest block">// Join The ISBLEX Community</h2>
            <p className="text-3xl sm:text-5xl font-black tracking-tight leading-none uppercase">
              Thousands of people use smart lighting to upgrade their <br />
              <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-700 bg-clip-text text-transparent">
                gaming rooms, bedrooms and workspaces.
              </span>
            </p>
          </div>

          {/* COMMUNITY STATISTICS NODE */}
          <div className="lg:col-span-5 bg-[#0C0C0E] border border-zinc-900 rounded-2xl p-6 flex justify-around items-center text-center shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
            <div>
              <div className="text-2xl md:text-3xl font-black font-mono text-white">50K+</div>
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mt-1">Active Rigs</div>
            </div>
            <div className="w-[1px] h-10 bg-zinc-800" />
            <div>
              <div className="text-2xl md:text-3xl font-black font-mono text-[#22D3EE]">5M+</div>
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mt-1">TikTok Loops</div>
            </div>
            <div className="w-[1px] h-10 bg-zinc-800" />
            <div>
              <div className="text-2xl md:text-3xl font-black font-mono text-white">99.4%</div>
              <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mt-1">Focus Score</div>
            </div>
          </div>
        </div>

        {/* ================= SOCIAL FEED: 9:16 HIGH-END VIDEO INTERFACE GRID ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-16">
          {socialFeed.map((feed) => (
            <div 
              key={feed.id}
              className={`group relative aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-950 border ${feed.accent} transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_25px_60px_rgba(34,211,238,0.08)]`}
            >
              {/* Media Image Layer (Simulating TikTok Video Poster) */}
              <img 
                src={feed.bgImage} 
                alt={feed.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105"
              />

              {/* Top Meta Details Badge */}
              <div className="absolute top-3 inset-x-3 flex justify-between items-center z-20">
                <span className="text-[7px] md:text-[8px] font-mono bg-black/60 border border-zinc-800 px-2 py-0.5 rounded text-zinc-400 backdrop-blur-xs uppercase">
                  {feed.type}
                </span>
                <span className="text-[8px] font-mono text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-500/20 px-1.5 py-0.5 rounded backdrop-blur-xs">
                  {feed.metric}
                </span>
              </div>

              {/* Center Play Interface Button Illusion (Only shows on TikTok items) */}
              {feed.type === "TikTok Content" && (
                <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 group-hover:opacity-80">
                  <div className="w-10 h-10 rounded-full bg-black/70 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-zinc-950/90 transition-all">
                    <span className="text-white text-xs ml-0.5">&#9658;</span>
                  </div>
                </div>
              )}

              {/* Bottom Transparent Meta Shader Frame */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 pt-12 flex flex-col justify-end z-20">
                <span className="text-[10px] font-mono text-zinc-400 tracking-tight block">
                  {feed.username}
                </span>
                <h3 className="text-xs font-black tracking-tight text-white mt-0.5 uppercase leading-tight group-hover:text-[#22D3EE] transition-colors">
                  {feed.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CALL TO ACTION INTERACTIVE TRANSMISSION NODE ================= */}
        <div className="flex flex-col items-center justify-center text-center space-y-5 pt-4">
          <p className="text-xs text-zinc-500 font-light max-w-md">
            Have you optimized your physical architecture? Share your environment setup video with the tag <span className="text-white font-medium">#ISBLEXMatrix</span> to get featured in our global node.
          </p>
          
          <button 
            type="button"
            className="group relative px-6 py-3 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-white tracking-widest uppercase overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] active:scale-98 cursor-pointer"
          >
            {/* Soft inner glow line element */}
            <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <span className="relative flex items-center gap-2">
              LAUNCH COMMUNITY HUB <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform text-cyan-400">&rarr;</span>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}