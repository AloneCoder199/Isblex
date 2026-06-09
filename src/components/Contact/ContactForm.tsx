"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  // 1. Manage form state seamlessly
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'General Botanical Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  // 2. Input change interceptor
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. Elegant Email Dispatch Sequence
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic structural assessment
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please elegantly complete all mandatory entry fields.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Routing parameters to our skincare atelier...' });

    try {
      // API call triggers both administrative routing and client validation emails
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network transit degradation.');

      // Clear layout elements upon successful fulfillment
      setFormData({
        name: '',
        email: '',
        inquiryType: 'General Botanical Inquiry',
        message: ''
      });
      
      setStatus({ 
        type: 'success', 
        message: 'Inquiry received. A luxurious confirmation has been routed to your digital address.' 
      });

    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Logistical error during dispatch. Please connect via concierge@prifya.com directly.' 
      });
    }
  };

  return (
    <section className="bg-[#FDFBF7] text-[#3E2A20] font-sans py-24 px-4 md:px-8 select-none">
      <div className="max-w-3xl mx-auto">
        
        {/* Form Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[11px] font-sans font-semibold text-[#8A9A86] tracking-[0.25em] uppercase mb-3">
            Skin Concierge Desk
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-[#3E2A20] tracking-tight">
            Send Us A <span className="text-[#8A9A86] font-normal italic">Message</span>
          </h3>
          <p className="mt-4 text-sm text-[#3E2A20]/70 font-light max-w-xl">
            Have questions about our botanical formulas or your order? Reach out, and our experts will guide you.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[#D0C9BC]/50">
          
          {/* Status Message System */}
          {status.type !== 'idle' && (
            <div className={`p-4 rounded-xl text-xs font-medium tracking-wide transition-all ${
              status.type === 'loading' ? 'bg-[#FAF8F5] text-[#A69276] border border-[#EBE7E0]' :
              status.type === 'success' ? 'bg-[#E3ECE6] text-[#3A4D3F] border border-[#8A9A86]/30' :
              'bg-red-50 text-red-700 border border-red-100'
            }`}>
              {status.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Field */}
            <div className="space-y-2.5">
              <label className="text-xs font-medium text-[#3E2A20]">Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status.type === 'loading'}
                className="w-full bg-[#FDFBF7] border border-[#D0C9BC] p-4 rounded-xl text-[#3E2A20] text-sm outline-none focus:ring-1 focus:ring-[#B89B72] focus:border-[#B89B72] transition-all placeholder:text-[#3E2A20]/40 disabled:opacity-50" 
                placeholder="Elizabeth Bennet" 
                required
              />
            </div>
            
            {/* Email Field */}
            <div className="space-y-2.5">
              <label className="text-xs font-medium text-[#3E2A20]">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status.type === 'loading'}
                className="w-full bg-[#FDFBF7] border border-[#D0C9BC] p-4 rounded-xl text-[#3E2A20] text-sm outline-none focus:ring-1 focus:ring-[#B89B72] focus:border-[#B89B72] transition-all placeholder:text-[#3E2A20]/40 disabled:opacity-50" 
                placeholder="lizzy@email.com" 
                required
              />
            </div>
          </div>

          {/* Inquiry Type Select */}
          <div className="space-y-2.5">
            <label className="text-xs font-medium text-[#3E2A20]">Inquiry Type</label>
            <div className="relative">
              <select 
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                disabled={status.type === 'loading'}
                className="w-full bg-[#FDFBF7] border border-[#D0C9BC] p-4 rounded-xl text-[#3E2A20] text-sm outline-none focus:ring-1 focus:ring-[#B89B72] focus:border-[#B89B72] transition-all appearance-none cursor-pointer placeholder:text-[#3E2A20]/40 disabled:opacity-50"
              >
                <option value="General Botanical Inquiry">General Botanical Inquiry</option>
                <option value="Order Curation Status">Order Curation Status (Provide Order ID)</option>
                <option value="Ritual Consultation">Ritual Consultation / Personalized Advice</option>
                <option value="Partnership & Press Inquiry">Partnership & Press Inquiry</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-[#8A9A86]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2.5">
            <label className="text-xs font-medium text-[#3E2A20]">Message</label>
            <textarea 
              name="message"
              rows={6} 
              value={formData.message}
              onChange={handleChange}
              disabled={status.type === 'loading'}
              className="w-full bg-[#FDFBF7] border border-[#D0C9BC] p-4 rounded-xl text-[#3E2A20] text-sm outline-none focus:ring-1 focus:ring-[#B89B72] focus:border-[#B89B72] transition-all placeholder:text-[#3E2A20]/40 resize-none disabled:opacity-50" 
              placeholder="Tell us about your skin concerns or requirements..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button 
              type="submit" 
              disabled={status.type === 'loading'}
              className="w-full md:w-auto md:px-12 bg-[#8A9A86] text-white py-4 rounded-full font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#6A8F67] active:scale-[0.98] transition-all shadow-md shadow-[#8A9A86]/20 disabled:opacity-50 disabled:pointer-events-none"
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Inquiry'}
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}