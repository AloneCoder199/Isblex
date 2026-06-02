"use client";
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function UnsubscribePage() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  
  // States: 'idle' (confirm), 'loading' (api), 'success' (done)
  const [step, setStep] = useState<'confirm' | 'loading' | 'success'>('confirm');
  const [error, setError] = useState('');

  const handleUnsubscribe = async () => {
    setStep('loading');
    try {
      const res = await fetch('/api/newsletter/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      
      if (data.success) {
        setStep('success');
      } else {
        setError(data.error || 'Failed to process.');
        setStep('confirm');
      }
    } catch {
      setError('Connection error.');
      setStep('confirm');
    }
  };

  return (
    <section className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-[#111827] border border-[#1E293B] p-8 text-center">
        <h2 className="text-xl font-black text-[#F8FAFC] uppercase tracking-tight mb-4">
          {step === 'success' ? 'Unsubscribed' : 'ISblex Detachment'}
        </h2>

        {step === 'confirm' && (
          <div className="text-left">
            <p className="text-[#94A3B8] text-sm mb-6">
              We are genuinely sorry to see you go. Our mission at ISblex is to provide premium intelligence, and we regret if we haven't met your expectations. 
              <br/><br/>
              Are you sure you want to proceed with unsubscription?
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => window.location.href = '/dashboard'}
                className="flex-1 py-3 text-xs uppercase font-mono border border-[#1E293B] hover:bg-[#1E293B] text-[#94A3B8]"
              >
                Back (Stay)
              </button>
              <button 
                onClick={handleUnsubscribe}
                className="flex-1 py-3 text-xs uppercase font-mono bg-[#22D3EE] text-[#0A0A0A] font-bold"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 'loading' && <div className="text-[#22D3EE] font-mono text-sm">[ PROCESSING DETACHMENT... ]</div>}

        {step === 'success' && (
          <div>
            <p className="text-[#F8FAFC] text-sm">You have been removed from our list. We hope to serve you again in the future.</p>
            <a href="/auth" className="mt-6 block text-[#22D3EE] text-xs uppercase font-mono">Return to Terminal</a>
          </div>
        )}
        
        {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
      </div>
    </section>
  );
}