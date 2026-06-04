'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

// Client-side Supabase Storage upload ke liye initialize kiya
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Core Form State (Postgres Schema Columns)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    summary: '',
    description: '',
    real_price: '0.00',
    offer_price: '0.00',
    cost_price: '0.00',
    sku: '',
    stock_quantity: '0',
    low_stock_level: '5',
    status: 'draft',
    category_id: '', 
    seo_title: '',
    seo_description: ''
  });

  // Media Array States (Urls storage se yahan ayengi)
  const [imagesList, setImagesList] = useState<string[]>([]);
  const [videosList, setVideosList] = useState<string[]>([]);

  // Auto-generate URL friendly slug from product title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const titleVal = e.target.value;
    const generatedSlug = titleVal
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    setFormData({ ...formData, title: titleVal, slug: generatedSlug });
  };

  // 🔥 SUPABASE IMAGE UPLOAD HANDLER
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setUploadingImage(true);
    
    try {
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `images/${fileName}`;

      // 1. Storage bucket 'products' me push karna
      const { error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Public URL extract karna
      const { data: { publicUrl } } = supabase.storage
        .from('products')
        .getPublicUrl(filePath);

      // 3. Form array list me url add karna
      setImagesList((prev) => [...prev, publicUrl]);
    } catch (err: any) {
      alert(`Image upload failed: ${err.message}`);
    } finally {
      setUploadingImage(false);
    }
  };

  // 🔥 SUPABASE VIDEO UPLOAD HANDLER
  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setUploadingVideo(true);

    try {
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `videos/${fileName}`;

      // 1. Upload to storage
      const { error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('products')
        .getPublicUrl(filePath);

      // 3. Append to video state array
      setVideosList((prev) => [...prev, publicUrl]);
    } catch (err: any) {
      alert(`Video upload failed: ${err.message}`);
    } finally {
      setUploadingVideo(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    if (!formData.category_id) {
      setMessage({ type: 'error', text: 'Category UUID is required!' });
      setLoading(false);
      return;
    }

    const payload = {
      ...formData,
      images: imagesList,
      videos: videosList
    };

    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await res.json();

      if (result.success) {
        setMessage({ type: 'success', text: '🚀 Product successfully published in ISBLEX core system!' });
        setTimeout(() => router.push('/admin/products'), 2000);
      } else {
        setMessage({ type: 'error', text: `❌ Database Error: ${result.error}` });
      }
    } catch (err) {
      setMessage({ type: 'error', text: '❌ Connection crash with API route.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Module with Cyan Accent */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-brand-border pb-5 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Deploy <span className="text-brand-cyan">Product</span> Engine
            </h1>
            <p className="text-sm text-brand-muted mt-1">ISBLEX Premium Admin interface to feed public.products table.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-brand-blue/20 text-brand-cyan font-mono font-bold px-3 py-1.5 rounded-md border border-brand-blue/30 tracking-widest uppercase">
              Core Security Access
            </span>
          </div>
        </div>

        {/* Dynamic Premium Alerts */}
        {message.text && (
          <div className={`p-4 rounded-xl font-mono text-xs border ${message.type === 'success' ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30' : 'bg-red-950/40 text-red-400 border-red-500/30'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT GRID: Main Forms (General, Pricing, Cloud Media Storage) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Box 1: Core Details */}
            <div className="bg-brand-card rounded-xl border border-brand-border p-6 shadow-2xl space-y-4">
              <h2 className="text-md font-bold text-white tracking-wide uppercase border-b border-brand-border pb-2 text-brand-cyan">General Information</h2>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-muted tracking-wider uppercase">Product Title *</label>
                <input required type="text" value={formData.title} onChange={handleTitleChange} placeholder="e.g. Cyberpunk Limited Hoodie" className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-muted tracking-wider uppercase">Slug (Live Permaindex Path) *</label>
                <input required type="text" value={formData.slug} onChange={(e) => setFormData({...formData, slug: e.target.value})} placeholder="cyberpunk-limited-hoodie" className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-xs font-mono text-brand-cyan focus:outline-none focus:border-brand-cyan transition-colors" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-muted tracking-wider uppercase">Short Summary *</label>
                <input required type="text" value={formData.summary} onChange={(e) => setFormData({...formData, summary: e.target.value})} placeholder="One line attention grabber for retail display grids..." className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-muted tracking-wider uppercase">Full Rich Description *</label>
                <textarea required rows={4} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Enter deep content formatting specifications..." className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors" />
              </div>
            </div>

            {/* Box 2: Pricing Logic */}
            <div className="bg-brand-card rounded-xl border border-brand-border p-6 shadow-2xl">
              <h2 className="text-md font-bold text-white tracking-wide uppercase border-b border-brand-border pb-2 mb-4 text-brand-cyan">Financial Matrix</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-muted uppercase">Real Price ($) *</label>
                  <input required type="number" step="0.01" value={formData.real_price} onChange={(e) => setFormData({...formData, real_price: e.target.value})} className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white focus:outline-none focus:border-brand-cyan font-mono" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-muted uppercase">Offer Price ($)</label>
                  <input type="number" step="0.01" value={formData.offer_price} onChange={(e) => setFormData({...formData, offer_price: e.target.value})} className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white focus:outline-none focus:border-brand-cyan font-mono" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-brand-muted uppercase">Cost Basis Price ($) *</label>
                  <input required type="number" step="0.01" value={formData.cost_price} onChange={(e) => setFormData({...formData, cost_price: e.target.value})} className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white focus:outline-none focus:border-brand-cyan font-mono" />
                </div>
              </div>
            </div>

            {/* Box 3: Automated Supabase Storage Cloud Media */}
            <div className="bg-brand-card rounded-xl border border-brand-border p-6 shadow-2xl space-y-5">
              <h2 className="text-md font-bold text-white tracking-wide uppercase border-b border-brand-border pb-2 text-brand-cyan">
                Cloud Assets Pipeline (Supabase Storage)
              </h2>
              
              {/* Image Input File */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-muted tracking-wider uppercase block">Stream PC Images directly to Bucket</label>
                <div className="relative group cursor-pointer border border-dashed border-brand-border rounded-xl bg-background p-4 text-center hover:border-brand-cyan transition-all">
                  <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploadingImage} className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed" />
                  <span className="text-xs font-semibold text-brand-muted group-hover:text-white transition-colors">
                    {uploadingImage ? '⚡ Uploading Asset to Supabase Pipeline...' : '📂 Click here to select image from PC'}
                  </span>
                </div>
                
                {/* Image List Display */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {imagesList.map((url, i) => (
                    <div key={i} className="relative aspect-square rounded-lg border border-brand-border overflow-hidden bg-background group">
                      <img src={url} alt="Uploaded product preview" className="w-full h-full object-cover" />
                      <button type="button" onClick={() => setImagesList(imagesList.filter((_, idx) => idx !== i))} className="absolute top-1 right-1 bg-black/80 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold transition-colors">×</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Input File */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-muted tracking-wider uppercase block">Stream PC High-Def Videos</label>
                <div className="relative group cursor-pointer border border-dashed border-brand-border rounded-xl bg-background p-4 text-center hover:border-brand-blue transition-all">
                  <input type="file" accept="video/*" onChange={handleVideoUpload} disabled={uploadingVideo} className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed" />
                  <span className="text-xs font-semibold text-brand-muted group-hover:text-white transition-colors">
                    {uploadingVideo ? '⚡ Uploading HD Video to Cloud Storage...' : '🎬 Click here to upload video from PC'}
                  </span>
                </div>
                
                {/* Video List Links Tracker */}
                <div className="space-y-1.5 pt-1">
                  {videosList.map((url, i) => (
                    <div key={i} className="flex justify-between items-center text-xs font-mono bg-background border border-brand-border px-3 py-2 rounded-lg text-brand-blue">
                      <span className="truncate max-w-[80%]">🎥 {url}</span>
                      <button type="button" onClick={() => setVideosList(videosList.filter((_, idx) => idx !== i))} className="text-red-400 font-bold hover:text-red-500 px-1 text-sm">Remove</button>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT GRID: Sidebar Settings (Status Controls, Stock & Core Meta Engine) */}
          <div className="space-y-6">
            
            {/* Box A: Deployment Configuration */}
            <div className="bg-brand-card rounded-xl border border-brand-border p-6 shadow-2xl space-y-4">
              <h2 className="text-sm font-bold text-white border-b border-brand-border pb-1 tracking-wide uppercase text-brand-cyan">Engine Status</h2>
              
              <div className="space-y-1">
  <label className="text-xs font-bold text-brand-muted uppercase">Deployment State *</label>
  <select 
    value={formData.status} 
    onChange={(e) => setFormData({...formData, status: e.target.value})} 
    className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white focus:outline-none focus:border-brand-cyan"
  >
    {/* 1. Draft Option */}
    <option value="draft" className="bg-brand-card text-white">
      Draft Mode 📄
    </option>
    
    {/* 2. Published Option (Yeh "active" ka kaam karega bina error ke) */}
    <option value="published" className="bg-brand-card text-brand-cyan font-bold">
      Published / Live 🚀
    </option>
    
    {/* 3. Out of Stock Option */}
    <option value="out_of_stock" className="bg-brand-card text-amber-400">
      Out of Stock 📦
    </option>
    
    {/* 4. Archived Option */}
    <option value="archived" className="bg-brand-card text-red-400">
      Archived 🗄️
    </option>
  </select>
</div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-muted uppercase">Category Relation UUID *</label>
                <input required type="text" value={formData.category_id} onChange={(e) => setFormData({...formData, category_id: e.target.value})} placeholder="Pass valid table UUID" className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-xs font-mono text-white focus:outline-none focus:border-brand-cyan" />
              </div>
            </div>

            {/* Box B: Physical Inventory Tracking */}
            <div className="bg-brand-card rounded-xl border border-brand-border p-6 shadow-2xl space-y-4">
              <h2 className="text-sm font-bold text-white border-b border-brand-border pb-1 tracking-wide uppercase text-brand-cyan">Inventory Vault</h2>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-muted uppercase">SKU Barcode Identifier *</label>
                <input required type="text" value={formData.sku} onChange={(e) => setFormData({...formData, sku: e.target.value})} placeholder="ISB-CYBER-001" className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white font-mono focus:outline-none focus:border-brand-cyan" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-muted uppercase">Stock Quantity Pool *</label>
                <input required type="number" value={formData.stock_quantity} onChange={(e) => setFormData({...formData, stock_quantity: e.target.value})} className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white font-mono focus:outline-none focus:border-brand-cyan" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-muted uppercase">Low stock alerts limit *</label>
                <input required type="number" value={formData.low_stock_level} onChange={(e) => setFormData({...formData, low_stock_level: e.target.value})} className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white font-mono focus:outline-none focus:border-brand-cyan" />
              </div>
            </div>

            {/* Box C: SEO Search Index Engine */}
            <div className="bg-brand-card rounded-xl border border-brand-border p-6 shadow-2xl space-y-4">
              <h2 className="text-sm font-bold text-white border-b border-brand-border pb-1 tracking-wide uppercase text-brand-cyan">SEO Crawler Meta</h2>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-muted uppercase">SEO Browser Title</label>
                <input type="text" value={formData.seo_title} onChange={(e) => setFormData({...formData, seo_title: e.target.value})} placeholder="Google index query header name" className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white focus:outline-none focus:border-brand-cyan" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-brand-muted uppercase">SEO Snip Description</label>
                <textarea rows={3} value={formData.seo_description} onChange={(e) => setFormData({...formData, seo_description: e.target.value})} placeholder="Search result summary clip text details..." className="w-full px-4 py-2.5 rounded-lg bg-background border border-brand-border text-sm text-white focus:outline-none focus:border-brand-cyan" />
              </div>
            </div>

            {/* Core Action Submit Button */}
            <button
              type="submit"
              disabled={loading || uploadingImage || uploadingVideo}
              className="w-full py-4 text-center text-sm font-black bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-dark rounded-xl transition-all hover:opacity-90 active:scale-98 shadow-xl uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin"></span>
                  Pushing Data Core...
                </div>
              ) : (
                'Publish Product 🚀'
              )}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}