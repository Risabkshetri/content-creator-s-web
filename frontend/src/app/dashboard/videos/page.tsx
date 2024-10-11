import { VideoContent } from '@/components/VideoContent';
import { fetchVideos } from '@/lib/api';
import React from 'react';

async function VideosPage() {
  try {
    const videos = await fetchVideos();

    return (
      <div className='container mx-auto px-4 mt-10 py-12 md:py-20'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-8 md:mb-12 tracking-tight text-center'>
          Explore Our Videos
        </h1>
        <div className='bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl shadow-lg p-6 md:p-10'>
          <VideoContent videos={videos} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching videos:', error);
    return (
      <div className='container mx-auto px-4 mt-10 py-12 md:py-20'>
        <h1 className='text-4xl md:text-5xl font-bold text-red-600 mb-8 md:mb-12 tracking-tight text-center'>
          Error Loading Videos
        </h1>
        <p className='text-center text-gray-600'>
          We're sorry, but there was an error loading the videos. Please try again later.
        </p>
      </div>
    );
  }
}

export default VideosPage;