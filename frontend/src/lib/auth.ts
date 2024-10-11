

import axios from 'axios';
import { AuthResponse, User } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8081/api';
console.log(API_URL)

// Create an axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await api.post('/users/login', { email, password });
    const { accessToken, refreshToken, user } = response.data;
    console.log("accessToken:", accessToken, " refreshToken", refreshToken)
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    return { user, accessToken, refreshToken };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Login error:', error.response?.data);
      throw new Error(error.response?.data?.message || 'An error occurred during login');
    }
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    await api.post('/users/logout', { refreshToken });
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
};

export const refreshToken = async (): Promise<string | null> => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) return null;

  try {
    const response = await api.post('/users/refresh-token', { refreshToken });
    const { accessToken, refreshToken: newRefreshToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
    return accessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    await logout();
    return null;
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const response = await api.get('/users/current');
    return response.data;
  } catch (error) {
    console.error('Error fetching current user:', error);
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      const newToken = await refreshToken();
      if (newToken) {
        return getCurrentUser();
      }
    }
    return null;
  }
};

export const fetchUserData = async (userId: string): Promise<User | null> => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      const newToken = await refreshToken();
      if (newToken) {
        return fetchUserData(userId);
      }
    }
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('accessToken');
};

export const register = async (username: string, email: string, password: string): Promise<void> => {
  try {
    await api.post('/users/register', { username, email, password });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Registration error:', error.response?.data);
      throw new Error(error.response?.data?.message || 'An error occurred during registration');
    }
    throw error;
  }
};