// libs/api.ts

import axios from 'axios';

// Define interfaces or types for API responses
export interface Video {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  duration: number;
  views: number;
  likes: number;
  tags: string[];
};
export interface Blog {
  id?: string;
  title: string;
  description?: string;
  content: string;
  author?: string;
  createdAt?: Date;
  updatedAt?: Date;
  category: string;
  thumbnail: string;
  images?: string[];
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8081/api';


export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

interface User {
  id: string;
  username: string;
  email: string;
}

// Fetch videos
export const fetchVideos = async (): Promise<Video[]> => {
  try {
    console.log(`Fetching videos from: ${API_BASE_URL}/videos`);
    const response = await axios.get<Video[]>(`${API_BASE_URL}/videos`);
    console.log('Fetched videos successfully');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching videos:', error.message);
      console.error('Status:', error.response?.status);
      console.error('Data:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

// Fetch blogs
export const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await axios.get<Blog[]>(`${API_BASE_URL}/blogs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Fetch users
export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${API_BASE_URL}/users`);
  return response.data;
};

