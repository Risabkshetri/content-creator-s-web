'use client'
import React from 'react'
import { FaPlayCircle, FaCalendarAlt, FaClock } from 'react-icons/fa'
import Image from 'next/image'

interface Podcast {
  id: string;
  title: string;
  description: string;
  duration: string;
  uploadDate: string;
  imageUrl: string;
  author: string;
}

const NewPodcastsPage: React.FC = () => {
  // Mock data for recent podcasts
  const recentPodcasts: Podcast[] = [
    {
      id: '1',
      title: 'The Future of AI in Content Creation',
      description: 'Exploring how AI is revolutionizing content creation across various platforms.',
      duration: '32 min',
      uploadDate: '2023-06-15',
      imageUrl: 'https://picsum.photos/seed/podcast1/300/300',
      author: 'Jane Doe'
    },
    {
      id: '2',
      title: 'Monetization Strategies for Content Creators',
      description: 'Discussing effective ways for content creators to monetize their work in 2023.',
      duration: '45 min',
      uploadDate: '2023-06-10',
      imageUrl: 'https://picsum.photos/seed/podcast2/300/300',
      author: 'John Smith'
    },
    {
      id: '3',
      title: 'Building a Personal Brand Online',
      description: 'Tips and strategies for creating a strong personal brand in the digital space.',
      duration: '38 min',
      uploadDate: '2023-06-05',
      imageUrl: 'https://picsum.photos/seed/podcast3/300/300',
      author: 'Alice Johnson'
    },
    {
      id: '4',
      title: 'The Impact of Social Media on Modern Journalism',
      description: 'Analyzing how social media platforms have transformed the landscape of journalism.',
      duration: '50 min',
      uploadDate: '2023-06-01',
      imageUrl: 'https://picsum.photos/seed/podcast4/300/300',
      author: 'Bob Williams'
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
        New Podcasts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentPodcasts.map((podcast) => (
          <div key={podcast.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src={podcast.imageUrl}
              alt={podcast.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{podcast.title}</h2>
              <p className="text-gray-600 mb-4">{podcast.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <FaClock className="mr-1" /> {podcast.duration}
                </span>
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-1" /> {podcast.uploadDate}
                </span>
              </div>
              <p className="text-indigo-600 font-medium mb-4">By {podcast.author}</p>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                <FaPlayCircle className="mr-2" /> Listen Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewPodcastsPage


