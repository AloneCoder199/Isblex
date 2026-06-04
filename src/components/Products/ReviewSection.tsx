"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import { createBrowserClient } from "@supabase/ssr";

interface Review {
  id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

interface ReviewSectionProps {
  productId: string;
  initialReviews: Review[];
}

// 🌟 Styled StarRating Component
const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange?: (r: number) => void }) => {
  return (
    <div className="flex text-cyan-500 text-xs gap-0.5 font-mono">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={onRatingChange ? "cursor-pointer text-base hover:scale-125 hover:text-white transition-all duration-150 px-0.5" : ""}
          onClick={() => onRatingChange && onRatingChange(star)}
        >
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default function ReviewSection({ productId, initialReviews }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize Supabase Browser Client
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !comment.trim()) return;

    setIsSubmitting(true);

    const { data, error } = await supabase
      .from("reviews")
      .insert([
        {
          product_id: productId,
          user_name: userName,
          rating: rating,
          comment: comment,
        },
      ])
      .select()
      .single();

    setIsSubmitting(false);

    if (!error && data) {
      setReviews([data, ...reviews]);
      setUserName("");
      setComment("");
      setRating(5);
      setShowForm(false);
    } else {
      console.error("Submission Error:", error);
    }
  };

  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1) : "0.0";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start overflow-visible">
      
      {/* LEFT SIDE: Review Aggregate Metrics */}
      <div className="lg:col-span-4 space-y-5 w-full">
        <div className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
          // CUSTOMER_REVIEWS
        </div>
        
        {/* Metric Card styled exactly like product panels */}
        <div className="bg-[#09090B] border border-zinc-900 p-5 rounded-md space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-mono font-bold text-white tracking-tight">{averageRating}</span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">/ 5.0 RATING</span>
          </div>
          
          <div className="flex items-center gap-3 py-1 border-t border-b border-zinc-900/50">
            <StarRating rating={Math.round(Number(averageRating))} />
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              ({totalReviews} GLOBAL RATINGS)
            </span>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className={`w-full py-2.5 border text-[10px] font-mono uppercase tracking-wider rounded-md transition-all ${
              showForm 
                ? "border-red-900/50 text-red-400 bg-red-950/5 hover:border-red-500" 
                : "border-zinc-800 text-zinc-400 bg-transparent hover:border-cyan-500 hover:text-white"
            }`}
          >
            {showForm ? "Cancel Review ▲" : "Write a Customer Review ▼"}
          </button>
        </div>

        {/* Dynamic Review Submission Form */}
        {showForm && (
          <form 
            onSubmit={handleSubmit} 
            className="p-5 bg-[#09090B] border border-zinc-800 rounded-md space-y-4 animate-fade-in transition-all"
          >
            <div className="text-[9px] font-mono text-zinc-500 tracking-[0.15em] uppercase">
              // SHARE_YOUR_THOUGHTS
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase">Your Name</label>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-[#0c0c0e] border border-zinc-900 rounded-md p-2.5 text-xs font-mono text-zinc-200 focus:outline-none focus:border-cyan-500 transition-colors placeholder-zinc-700"
                placeholder="e.g. Alone Coder"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase block">Overall Rating</label>
              <div className="bg-[#0c0c0e] p-2 rounded-md border border-zinc-900 inline-block w-full">
                <StarRating rating={rating} onRatingChange={(r) => setRating(r)} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-400 uppercase">Review Description</label>
              <textarea
                required
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-[#0c0c0e] border border-zinc-900 rounded-md p-2.5 text-xs font-mono text-zinc-200 focus:outline-none focus:border-cyan-500 transition-colors placeholder-zinc-700 resize-none"
                placeholder="What did you like or dislike about this asset?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-mono text-[10px] font-bold uppercase tracking-widest rounded-md shadow-md transition-all disabled:opacity-40 disabled:pointer-events-none"
            >
              {isSubmitting ? "Submitting Request..." : "Submit Review //"}
            </button>
          </form>
        )}
      </div>

      {/* RIGHT SIDE: Dynamic Reviews Display List */}
      <div className="lg:col-span-8 space-y-4 w-full">
        <div className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
          // LIVE_FEEDBACK
        </div>

        {totalReviews === 0 ? (
          <div className="p-8 bg-[#09090B] border border-zinc-900 border-dashed rounded-md text-center">
            <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider">
              No reviews found. Be the first to deploy feedback!
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[620px] overflow-y-auto pr-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {reviews.map((review: any) => (
              <div 
                key={review.id} 
                className="bg-[#09090B] border border-zinc-900 p-5 rounded-md space-y-3 transition-all hover:border-zinc-800"
              >
                {/* User Meta Row */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    {/* Mono style square profile token */}
                    <div className="h-7 w-7 rounded-md bg-[#0c0c0e] border border-zinc-800 flex items-center justify-center text-cyan-500 font-mono font-bold text-xs uppercase">
                      {review.user_name ? review.user_name.charAt(0) : "?"}
                    </div>
                    <span className="font-mono font-medium text-zinc-200 text-xs tracking-wide">{review.user_name}</span>
                  </div>
                  
                  <span className="text-[10px] text-zinc-500 font-mono tracking-wider">
                    {new Date(review.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).toUpperCase()}
                  </span>
                </div>

                {/* Rating Details */}
                <div className="pt-0.5">
                  <StarRating rating={review.rating} />
                </div>

                {/* Main Comment Description */}
                <p className="text-zinc-400 font-mono text-[11px] leading-relaxed whitespace-pre-wrap border-t border-zinc-900/60 pt-3">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}