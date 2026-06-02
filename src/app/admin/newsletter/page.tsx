"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/supabase';

export default function AdminNewsletterDashboard() {
  const [subject, setSubject] = useState('');
  const [rawContent, setRawContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [nodeCount, setNodeCount] = useState(0);
  const [status, setStatus] = useState({ type: '', text: '' });

  // 1. Fetch function ko useCallback mein rakha taake yeh baar baar re-create na ho
  const fetchSubscriberCount = useCallback(async () => {
    const { count, error } = await supabase
      .from('newsletter_subscribers' as any)
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true);
    
    if (!error && count !== null) {
      setNodeCount(count);
    }
  }, []);

  // 2. Initial load ke liye useEffect
  useEffect(() => {
    fetchSubscriberCount();
  }, [fetchSubscriberCount]);

  // 3. Broadcast Handler
  const executeBroadcast = async () => {
    if (!subject || !rawContent) {
      setStatus({ type: 'error', text: 'Validation Aborted: Subject and Content required.' });
      return;
    }

    setLoading(true);
    setStatus({ type: 'info', text: 'Transmission in progress...' });

    try {
      const response = await fetch('/api/admin/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, rawContent }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', text: `Success: ${data.message}` });
        setSubject(''); setRawContent('');
        fetchSubscriberCount(); // Update count after broadcast
      } else {
        setStatus({ type: 'error', text: data.error || 'Server Error' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Network connection failed.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F8FAFC] p-6 font-sans">
      <div className="max-w-4xl mx-auto border border-[#1E293B] bg-[#111827] p-8">
        
        <div className="flex justify-between border-b border-[#1E293B] pb-6 mb-8">
          <h1 className="text-2xl font-black uppercase text-[#F8FAFC]">ISblex Corporate Engine</h1>
          <div className="bg-[#0A0A0A] border px-4 py-2 font-mono text-xs">
            NODES: <span className="text-[#22D3EE] font-bold">{nodeCount}</span>
          </div>
        </div>

        {status.text && (
          <div className={`p-4 mb-6 border ${status.type === 'error' ? 'border-red-900 text-red-400' : 'border-[#22D3EE]/30 text-[#22D3EE]'}`}>
            {status.text}
          </div>
        )}

        <div className="space-y-6">
          <input 
            value={subject} onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-[#0A0A0A] border p-4" placeholder="Subject" 
          />
          <textarea 
            rows={12} value={rawContent} onChange={(e) => setRawContent(e.target.value)}
            className="w-full bg-[#0A0A0A] border p-4" placeholder="Payload..."
          />
          
          <button
            onClick={executeBroadcast}
            disabled={loading}
            className="w-full bg-[#F8FAFC] text-[#0A0A0A] py-4 uppercase font-black"
          >
            {loading ? "TRANSMITTING..." : "EXECUTE MASS TRANSMISSION"}
          </button>
        </div>
      </div>
    </main>
  );
}