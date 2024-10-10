'use client'
import React from 'react'
import { FaEye, FaCalendarAlt, FaClock } from 'react-icons/fa'
import Image from 'next/image'

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishDate: string;
  imageUrl: string;
  author: string;
  views: number;
}

const PopularBlogPostsPage: React.FC = () => {
  // Mock data for popular blog posts
  const popularPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 Essential Tips for Content Creators in 2023',
      excerpt: 'Discover the top strategies to boost your content creation game this year.',
      readTime: '5 min read',
      publishDate: '2023-06-20',
      imageUrl: 'https://picsum.photos/seed/blog1/300/300',
      author: 'Emma Watson',
      views: 15000
    },
    {
      id: '2',
      title: 'The Rise of AI in Content Creation: Friend or Foe?',
      excerpt: 'Exploring the impact of artificial intelligence on the content creation industry.',
      readTime: '7 min read',
      publishDate: '2023-06-18',
      imageUrl: 'https://picsum.photos/seed/blog2/300/300',
      author: 'Alex Johnson',
      views: 12500
    },
    {
      id: '3',
      title: 'Mastering SEO: A Guide for Content Creators',
      excerpt: 'Learn how to optimize your content for search engines and increase your visibility.',
      readTime: '6 min read',
      publishDate: '2023-06-15',
      imageUrl: 'https://picsum.photos/seed/blog3/300/300',
      author: 'Sarah Lee',
      views: 11000
    },
    {
      id: '4',
      title: 'The Power of Storytelling in Content Marketing',
      excerpt: 'Discover how to use storytelling techniques to create more engaging content.',
      readTime: '8 min read',
      publishDate: '2023-06-12',
      imageUrl: 'https://picsum.photos/seed/blog4/300/300',
      author: 'Michael Brown',
      views: 10500
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
        Popular Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <FaClock className="mr-1" /> {post.readTime}
                </span>
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-1" /> {post.publishDate}
                </span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">By {post.author}</p>
              <div className="flex items-center text-sm text-gray-500">
                <FaEye className="mr-1" /> {post.views.toLocaleString()} views
              </div>
              <button className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularBlogPostsPage
