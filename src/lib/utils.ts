import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabase } from "@/supabase";
import { imageItem } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const supabaseAdmin = supabase;

export async function getBucketItems(bucketName: string): Promise<string[]> {
  try {
    const { data, error } = await supabaseAdmin.storage.from(bucketName).list();
    if (error) {
      console.error("Failed to fetch bucket items");
      return [];
    }
    if (!data || data.length === 0) {
      console.info("No bucket items found");
      return [];
    }
    const urls = await Promise.all(
      data.map((item: imageItem) => getImagePublicUrl(item.name, bucketName))
    );
    //randomise urls
    urls == urls.sort(() => Math.random() - 0.5);
    return urls;
  } catch (error) {
    console.error("Error fetching bucket items:", error);
    return [];
  }
}

export async function getImagePublicUrl(
  imageName: string,
  bucketName: string
): Promise<string> {
  try {
    const { data } = await supabaseAdmin.storage
      .from(bucketName)
      .getPublicUrl(imageName);
    return data.publicUrl;
  } catch (error) {
    // Handle error appropriately
    console.error("Error fetching image public URL:", error);
    throw error;
  }
}
