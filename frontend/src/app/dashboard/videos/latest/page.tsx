'use client'
import React from 'react'
import { FaPlayCircle, FaCalendarAlt, FaClock } from 'react-icons/fa'
import Image from 'next/image'

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  uploadDate: string;
  thumbnailUrl: string;
  author: string;
}

const LatestVideosPage: React.FC = () => {
  // Mock data for recent videos
  const recentVideos: Video[] = [
    {
      id: '1',
      title: 'Advanced React Hooks Tutorial',
      description: 'Learn how to use advanced React hooks to build more efficient and powerful components.',
      duration: '25 min',
      uploadDate: '2023-06-20',
      thumbnailUrl: 'https://picsum.photos/seed/video1/300/300',
      author: 'React Master'
    },
    {
      id: '2',
      title: 'Creating Stunning Animations with CSS',
      description: 'Discover techniques for creating beautiful and performant animations using pure CSS.',
      duration: '18 min',
      uploadDate: '2023-06-18',
      thumbnailUrl: 'https://picsum.photos/seed/video2/300/300',
      author: 'CSS Wizard'
    },
    {
      id: '3',
      title: 'Introduction to TypeScript',
      description: 'Get started with TypeScript and learn how it can improve your JavaScript development.',
      duration: '30 min',
      uploadDate: '2023-06-15',
      thumbnailUrl: 'https://picsum.photos/seed/video3/300/300',
      author: 'TypeScript Guru'
    },
    {
      id: '4',
      title: 'Building Scalable Node.js Applications',
      description: 'Learn best practices for building large-scale, maintainable Node.js applications.',
      duration: '40 min',
      uploadDate: '2023-06-12',
      thumbnailUrl: 'https://picsum.photos/seed/video4/300/300',
      author: 'Node Ninja'
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
        Latest Videos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentVideos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{video.title}</h2>
              <p className="text-gray-600 mb-4">{video.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <FaClock className="mr-1" /> {video.duration}
                </span>
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-1" /> {video.uploadDate}
                </span>
              </div>
              <p className="text-indigo-600 font-medium mb-4">By {video.author}</p>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                <FaPlayCircle className="mr-2" /> Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestVideosPage
