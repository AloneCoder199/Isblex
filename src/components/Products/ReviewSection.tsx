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

// 🌟 Styled StarRating Component - Prifya Antique Gold Aesthetic
const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange?: (r: number) => void }) => {
  return (
    <div className="flex text-[#C4A77D] text-sm gap-0.5 font-sans">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={onRatingChange ? "cursor-pointer text-lg hover:scale-110 hover:text-[#B89B72] transition-all duration-150 px-0.5" : ""}
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start overflow-visible font-sans text-[#3E2A20]">
      
      {/* LEFT SIDE: Review Aggregate Metrics */}
      <div className="lg:col-span-4 space-y-5 w-full">
        <div className="text-[11px] font-semibold text-[#8A9A86] tracking-[0.2em] uppercase">
          Client Experiences
        </div>
        
        {/* Metric Card styled exactly like product panels */}
        <div className="bg-white border border-[#EBEAE5] p-6 rounded-xl space-y-5 shadow-sm shadow-[#EBEAE5]/50">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-serif font-semibold text-[#3E2A20] tracking-tight">{averageRating}</span>
            <span className="text-[10px] font-medium text-[#A39F99] uppercase tracking-wider">/ 5.0 Rating</span>
          </div>
          
          <div className="flex items-center gap-3 py-2 border-t border-b border-[#EBEAE5]">
            <StarRating rating={Math.round(Number(averageRating))} />
            <span className="text-[11px] text-[#A39F99] font-medium tracking-wider uppercase">
              ({totalReviews} Verified Notes)
            </span>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className={`w-full py-3 border text-[10px] font-semibold uppercase tracking-widest rounded-lg transition-all duration-300 ${
              showForm 
                ? "border-[#D14343]/40 text-[#D14343] bg-[#FFF1F1] hover:border-[#D14343]" 
                : "border-[#D0C9BC] text-[#3E2A20] bg-transparent hover:border-[#8A9A86] hover:text-[#8A9A86]"
            }`}
          >
            {showForm ? "Cancel Review —" : "Write a Review +"}
          </button>
        </div>

        {/* Dynamic Review Submission Form */}
        {showForm && (
          <form 
            onSubmit={handleSubmit} 
            className="p-6 bg-white border border-[#EBEAE5] rounded-xl space-y-5 shadow-sm shadow-[#EBEAE5]/50 animate-fade-in transition-all"
          >
            <div className="text-[11px] font-semibold text-[#8A9A86] tracking-[0.15em] uppercase">
              Share Your Thoughts
            </div>
            
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-[#3E2A20]/80 uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-[#FDFBF7] border border-[#D0C9BC]/50 rounded-lg p-3 text-sm text-[#3E2A20] focus:outline-none focus:border-[#8A9A86] transition-colors placeholder-[#A39F99]/60"
                placeholder="e.g. Sarah K."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-[#3E2A20]/80 uppercase tracking-wider block">Overall Rating</label>
              <div className="bg-[#FDFBF7] p-3 rounded-lg border border-[#D0C9BC]/50 inline-block w-full">
                <StarRating rating={rating} onRatingChange={(r) => setRating(r)} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-[#3E2A20]/80 uppercase tracking-wider">Review Description</label>
              <textarea
                required
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-[#FDFBF7] border border-[#D0C9BC]/50 rounded-lg p-3 text-sm text-[#3E2A20] focus:outline-none focus:border-[#8A9A86] transition-colors placeholder-[#A39F99]/60 resize-none leading-relaxed"
                placeholder="What was your skin's ritual experience with this item?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-[#4F7942] hover:bg-[#3D5E33] text-white font-semibold text-[11px] uppercase tracking-widest rounded-lg shadow-sm transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none"
            >
              {isSubmitting ? "Submitting Note..." : "Publish Review"}
            </button>
          </form>
        )}
      </div>

      {/* RIGHT SIDE: Dynamic Reviews Display List */}
      <div className="lg:col-span-8 space-y-4 w-full">
        <div className="text-[11px] font-semibold text-[#8A9A86] tracking-[0.2em] uppercase">
          Client Feedback Journal
        </div>

        {totalReviews === 0 ? (
          <div className="p-12 bg-[#FDFBF7] border border-[#D0C9BC]/40 border-dashed rounded-xl text-center">
            <p className="text-[#A39F99] text-xs font-medium uppercase tracking-wider">
              No reviews found yet. Be the first to share your ritual notes!
            </p>
          </div>
        ) : (
          <div className="space-y-4 max-h-[620px] overflow-y-auto pr-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {reviews.map((review: any) => (
              <div 
                key={review.id} 
                className="bg-white border border-[#EBEAE5] p-6 rounded-xl space-y-4 transition-all duration-300 hover:border-[#8A9A86]/30 shadow-sm shadow-[#EBEAE5]/30"
              >
                {/* User Meta Row */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    {/* Soft round minimalist user icon token */}
                    <div className="h-8 w-8 rounded-full bg-[#FDFBF7] border border-[#D0C9BC]/60 flex items-center justify-center text-[#8A9A86] font-semibold text-xs uppercase">
                      {review.user_name ? review.user_name.charAt(0) : "?"}
                    </div>
                    <span className="font-medium text-[#3E2A20] text-sm tracking-wide">{review.user_name}</span>
                  </div>
                  
                  <span className="text-[11px] text-[#A39F99] font-medium tracking-wider">
                    {new Date(review.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {/* Rating Details */}
                <div className="pt-0.5">
                  <StarRating rating={review.rating} />
                </div>

                {/* Main Comment Description */}
                <p className="text-[#666666] font-light text-sm leading-relaxed whitespace-pre-wrap border-t border-[#EBEAE5] pt-4">
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