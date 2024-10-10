import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchBlogs, Blog } from '@/lib/api';

interface Params {
  category: string;
  slug: string;
}

// Add this function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

const BlogPost: React.FC<{ params: Params }> = async ({ params }) => {
  const { slug, category } = params;

  try {
    const blogPosts = await fetchBlogs();
    const post = blogPosts.find(post => post.category === category && generateSlug(post.title) === slug);

    if (!post) {
      notFound();
    }

    return (
      <div className="max-w-2xl mx-auto overflow-y-auto p-4 mt-16">
        <Link href="/blog" className="text-blue-500 hover:underline mb-4 inline-block">
          &larr; Back to Blog
        </Link>
        <span className="text-sm text-gray-500">Category: {post.category}</span>
        <h1 className="text-3xl font-bold my-4">{post.title}</h1>
        <Image 
          src={post.thumbnail}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover mb-4"
        />
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'No date'}
          </span>
          <span className="text-sm font-medium text-indigo-600">
            {post.author || 'Unknown author'}
          </span>
        </div>
        <p className="text-lg mb-4">{post.description}</p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return (
      <div className="container mx-auto px-4 py-8 mt-16 text-center">
        <h1 className="text-3xl font-bold text-red-600">Error loading blog post</h1>
        <p className="mt-4 text-gray-600">Please try again later.</p>
      </div>
    );
  }
};

export default BlogPost;

export async function generateStaticParams() {
  try {
    const blogPosts = await fetchBlogs();
    return blogPosts.map((post: Blog) => ({
      category: post.category,
      slug: generateSlug(post.title),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}