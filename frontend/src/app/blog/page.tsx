'use clients'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios'


interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  content: string;
}


const BlogCard: React.FC<BlogPost> = ({
  title,
  description,
  image,
  category,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <Image
      src={image}
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
        <span className="text-sm text-gray-500 dark:text-gray-400">Category: {category}</span>
      </div>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
        Our Blog
      </h1>
      <p className="text-xl text-center mb-10 text-gray-600 dark:text-gray-300">
        Discover our latest thoughts and insights
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BlogList.map((post) => (
          <Link href={`/blog/${post.category}/${post.slug}`} key={post.id}>
            <BlogCard {...post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
