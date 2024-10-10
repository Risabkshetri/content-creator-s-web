'use client'
import React from 'react'
import { FaMicrophone, FaHeadphones, FaRss } from 'react-icons/fa'

// Custom podcast data
const podcastEpisodes = [
  {
    id: '1',
    title: 'The Future of AI in Gaming',
    description: 'Exploring how artificial intelligence is shaping the future of video games.',
    duration: '45 min',
    audioUrl: 'https://example.com/podcast1.mp3'
  },
  {
    id: '2',
    title: 'Indie Game Development Tips',
    description: 'Expert advice for aspiring indie game developers.',
    duration: '38 min',
    audioUrl: 'https://example.com/podcast2.mp3'
  },
  {
    id: '3',
    title: 'The Evolution of RPGs',
    description: 'A deep dive into the history and future of role-playing games.',
    duration: '52 min',
    audioUrl: 'https://example.com/podcast3.mp3'
  },
  {
    id: '4',
    title: 'Game Design Psychology',
    description: 'Understanding the psychological principles behind engaging game design.',
    duration: '41 min',
    audioUrl: 'https://example.com/podcast4.mp3'
  },
  {
    id: '5',
    title: 'The Art of Game Soundtracks',
    description: 'Exploring the impact of music and sound design in video games.',
    duration: '49 min',
    audioUrl: 'https://example.com/podcast5.mp3'
  },
  {
    id: '6',
    title: 'Esports and Competitive Gaming',
    description: 'The rise of professional gaming and its impact on the industry.',
    duration: '55 min',
    audioUrl: 'https://example.com/podcast6.mp3'
  }
]

function PodcastPage() {
  return (
    <div className='container mx-auto px-4 mt-10 py-12 md:py-20'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-8 md:mb-12 tracking-tight text-center'>
        Explore Our Podcasts
      </h1>
      <div className='bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl shadow-lg p-6 md:p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {podcastEpisodes.map((episode) => (
            <div key={episode.id} className='bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl'>
              <div className='p-6'>
                <div className='flex items-center mb-4'>
                  <FaMicrophone className='text-purple-600 text-xl mr-2' />
                  <h2 className='text-xl font-semibold text-gray-800'>{episode.title}</h2>
                </div>
                <p className='text-gray-600 mb-4'>{episode.description}</p>
                <div className='flex justify-between items-center'>
                  <span className='text-sm text-gray-500'>{episode.duration}</span>
                  <button 
                    className='bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300'
                    onClick={() => window.open(episode.audioUrl, '_blank')}
                  >
                    Listen Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-12 text-center'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>Subscribe to Our Podcast</h2>
        <div className='flex justify-center space-x-6'>
          <a href="#" className='text-gray-600 hover:text-purple-600 transition-colors duration-300'>
            <FaHeadphones className='text-3xl' />
            <span className='block mt-2'>Apple Podcasts</span>
          </a>
          <a href="#" className='text-gray-600 hover:text-purple-600 transition-colors duration-300'>
            <FaRss className='text-3xl' />
            <span className='block mt-2'>RSS Feed</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PodcastPage