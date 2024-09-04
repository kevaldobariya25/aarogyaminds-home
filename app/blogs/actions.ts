'use server';

import { query } from '@/lib/db';

export async function getBlogs(){
  try {
    // Check if the blogs already exists
    const existingBlogs = await query("SELECT * FROM mentalhealth ORDER BY id");
    
    const blogs = existingBlogs.rows.map(blog => blog);
    // console.log("blogs:", blogs)
    return blogs; 
    
  } catch (error) {
    console.error("Error getting blogs:", error);
    throw new Error("Failed to get blogs");
  }
}