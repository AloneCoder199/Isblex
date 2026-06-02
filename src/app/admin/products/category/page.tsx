"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/supabase';

export default function CategoryManager() {
  const [categories, setCategories] = useState<any[]>([]);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => { fetchCategories(); }, []);

  const fetchCategories = async () => {
    const { data } = await supabase.from('categories').select('*');
    setCategories(data || []);
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/admin/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ name: '', description: '' });
      fetchCategories();
      alert("✅ Category Created!");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F8FAFC] p-10 font-sans">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Add Form */}
        <div className="bg-[#111827] border border-[#1E293B] p-6">
          <h2 className="text-lg font-black uppercase mb-4">// NEW CATEGORY</h2>
          <form onSubmit={handleAddCategory} className="space-y-4">
            <input 
              className="w-full bg-[#0A0A0A] border border-[#1E293B] p-3 text-sm"
              placeholder="Category Name" value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <textarea 
              className="w-full bg-[#0A0A0A] border border-[#1E293B] p-3 text-sm"
              placeholder="Description" value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
            <button disabled={loading} className="w-full bg-[#F8FAFC] text-[#0A0A0A] py-3 font-bold uppercase text-xs">
              {loading ? "SAVING..." : "CREATE CATEGORY"}
            </button>
          </form>
        </div>

        {/* Existing List */}
        <div className="bg-[#111827] border border-[#1E293B] p-6">
          <h2 className="text-lg font-black uppercase mb-4">// ACTIVE CATEGORIES</h2>
          <div className="space-y-2">
            {categories.map((c) => (
              <div key={c.id} className="p-3 border border-[#1E293B] text-xs font-mono">
                {c.name.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}