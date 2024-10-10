import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBlogs } from "@/lib/api";
import { Blog } from "@/lib/api";
import { generateSlug } from "@/lib/api";

const BlogCard: React.FC<Blog> = ({
  title,
  description,
  createdAt,
  author,
  thumbnail,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <Image
      src={thumbnail}
      alt={title}
      width={400}
      height={225}
      className="object-cover w-full h-48"
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {createdAt ? new Date(createdAt).toLocaleDateString() : 'No date'}
        </span>
        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {author || 'Unknown author'}
        </span>
      </div>
    </div>
  </div>
);

const BlogPage: React.FC = async () => {
  try {
    const blogPosts = await fetchBlogs();
    console.log(blogPosts[0].thumbnail)

    return (
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
          Our Blog
        </h1>
        
        <p className="text-xl text-center mb-10 text-gray-600 dark:text-gray-300">
          Discover our latest thoughts and insights
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.category}/${generateSlug(post.title)}`} key={post.id}>
              <BlogCard {...post} />
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return (
      <div className="container mx-auto px-4 py-8 mt-16 text-center">
        <h1 className="text-3xl font-bold text-red-600">Error loading blogs</h1>
        <p className="mt-4 text-gray-600">Please try again later.</p>
      </div>
    );
  }
};

export default BlogPage;