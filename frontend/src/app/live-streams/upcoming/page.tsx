'use client'
import React from 'react'
import { FaPlay, FaCalendarAlt, FaClock } from 'react-icons/fa'
import Image from 'next/image'

interface LiveStream {
  id: string;
  title: string;
  description: string;
  duration: string;
  startDate: string;
  imageUrl: string;
  host: string;
}

const UpcomingLiveStreamsPage: React.FC = () => {
  // Mock data for upcoming live streams
  const upcomingStreams: LiveStream[] = [
    {
      id: '1',
      title: 'Interactive Game Development Workshop',
      description: 'Join us for a hands-on workshop on creating interactive games using modern web technologies.',
      duration: '2 hours',
      startDate: '2023-07-01 14:00',
      imageUrl: 'https://picsum.photos/seed/stream1/300/300',
      host: 'Sarah Johnson'
    },
    {
      id: '2',
      title: 'The Future of Virtual Reality in Education',
      description: 'Explore the potential impact of VR technology on the future of education and learning.',
      duration: '1.5 hours',
      startDate: '2023-07-03 18:30',
      imageUrl: 'https://picsum.photos/seed/stream2/300/300',
      host: 'Michael Chen'
    },
    {
      id: '3',
      title: 'Cybersecurity Best Practices for Content Creators',
      description: 'Learn essential cybersecurity tips to protect your content and online presence.',
      duration: '1 hour',
      startDate: '2023-07-05 20:00',
      imageUrl: 'https://picsum.photos/seed/stream3/300/300',
      host: 'Emily Rodriguez'
    },
    {
      id: '4',
      title: 'Mastering Social Media Algorithms',
      description: 'Discover strategies to optimize your content for various social media platform algorithms.',
      duration: '1.5 hours',
      startDate: '2023-07-07 15:00',
      imageUrl: 'https://picsum.photos/seed/stream4/300/300',
      host: 'Alex Thompson'
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 mt-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-indigo-800">
        Upcoming Live Streams
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingStreams.map((stream) => (
          <div key={stream.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Image
              src={stream.imageUrl}
              alt={stream.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-indigo-700">{stream.title}</h2>
              <p className="text-gray-600 mb-4">{stream.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <FaClock className="mr-1 text-indigo-500" /> {stream.duration}
                </span>
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-1 text-indigo-500" /> {stream.startDate}
                </span>
              </div>
              <p className="text-indigo-600 font-medium mb-4">Hosted by {stream.host}</p>
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-md hover:from-indigo-600 hover:to-purple-700 transition-colors duration-300 flex items-center justify-center">
                <FaPlay className="mr-2" /> Set Reminder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingLiveStreamsPage
