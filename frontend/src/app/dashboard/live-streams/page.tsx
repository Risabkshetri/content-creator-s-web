'use client'
import React from 'react'
import { FaVideo, FaCalendar, FaTwitch } from 'react-icons/fa'
import Image from 'next/image'

// Custom live stream data
const liveStreams = [
  {
    id: '1',
    title: 'Live Coding: Building a Game Engine',
    description: 'Join me as we build a game engine from scratch using C++.',
    scheduledTime: '2023-07-15T20:00:00Z',
    thumbnailUrl: '/images/live-coding-thumbnail.jpg',
    platform: 'Twitch'
  },
  {
    id: '2',
    title: 'Q&A Session: Game Development Career Advice',
    description: 'Ask me anything about starting a career in game development!',
    scheduledTime: '2023-07-18T19:00:00Z',
    thumbnailUrl: '/images/qa-session-thumbnail.jpg',
    platform: 'YouTube'
  },
  {
    id: '3',
    title: 'Playthrough: Latest Indie Game Releases',
    description: 'Let\'s explore some of the most exciting new indie game releases together.',
    scheduledTime: '2023-07-20T21:00:00Z',
    thumbnailUrl: '/images/playthrough-thumbnail.jpg',
    platform: 'Twitch'
  },
  {
    id: '4',
    title: 'Game Design Workshop: Level Creation',
    description: 'Learn the principles of effective level design in this interactive workshop.',
    scheduledTime: '2023-07-23T18:00:00Z',
    thumbnailUrl: '/images/workshop-thumbnail.jpg',
    platform: 'YouTube'
  }
]

function LiveStreamPage() {
  return (
    <div className='container mx-auto px-4 mt-10 py-12 md:py-20'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-8 md:mb-12 tracking-tight text-center'>
        Upcoming Live Streams
      </h1>
      <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow-lg p-6 md:p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {liveStreams.map((stream) => (
            <div key={stream.id} className='bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl'>
              <div className='relative h-48'>
                <Image
                  src={stream.thumbnailUrl}
                  alt={stream.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='p-6'>
                <div className='flex items-center mb-4'>
                  <FaVideo className='text-blue-600 text-xl mr-2' />
                  <h2 className='text-xl font-semibold text-gray-800'>{stream.title}</h2>
                </div>
                <p className='text-gray-600 mb-4'>{stream.description}</p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center text-sm text-gray-500'>
                    <FaCalendar className='mr-2' />
                    {new Date(stream.scheduledTime).toLocaleString()}
                  </div>
                  <div className='flex items-center text-sm text-gray-500'>
                    <FaTwitch className='mr-2' />
                    {stream.platform}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-12 text-center'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Never Miss a Stream</h2>
        <p className='text-gray-600 mb-6'>Get notified when we go live!</p>
        <button className='bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300'>
          Subscribe to Notifications
        </button>
      </div>
    </div>
  )
}

export default LiveStreamPage