// lib/supabase-storage.ts
import { supabase } from "@/supabase";

export async function uploadMedia(file: File, folder: string) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${folder}/${fileName}`;

  const { data, error } = await supabase.storage
    .from('products-media') // Aapka bucket name
    .upload(filePath, file);

  if (error) throw error;

  const { data: publicUrl } = supabase.storage
    .from('products-media')
    .getPublicUrl(filePath);

  return publicUrl.publicUrl;
}


export async function uploadToBucket(file: File, bucket: 'products-images' | 'products-videos') {
  const fileExt = file.name.split('.').pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) throw error;

  const { data: urlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return urlData.publicUrl;
}