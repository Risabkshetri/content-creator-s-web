import { VideoContent } from '@/components/VideoContent'
import React from 'react'

function VideosPage() {
  return (
    <div className='container mx-auto px-4 mt-10 py-12 md:py-20'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-8 md:mb-12 tracking-tight text-center'>
        Explore Our Videos
      </h1>
      <div className='bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl shadow-lg p-6 md:p-10'>
        <VideoContent />
      </div>
    </div>
  )
}

export default VideosPage