// libs/api.ts

import axios from 'axios';

// Define interfaces or types for API responses
export interface Video {
  id?: string;
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
interface Blog {
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

interface User {
  id: string;
  username: string;
  email: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8081/api';

// Fetch videos
export const fetchVideos = async (): Promise<Video[]> => {
  try {
    const response = await axios.get<Video[]>(`${API_BASE_URL}/videos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

// Fetch blogs
export const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await axios.get<Blog[]>(`${API_BASE_URL}/blogs`);
  return response.data;
};

// Fetch users
export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${API_BASE_URL}/users`);
  return response.data;
};

