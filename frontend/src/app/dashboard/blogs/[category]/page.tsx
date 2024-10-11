import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Using the BlogList from the current file scope
const BlogList = [
    {
        id: "1",
        title: 'Introduction to Next.js',
        description: 'Learn the basics of Next.js and why its a great framework for React applications.',
        image: 'https://picsum.photos/seed/nextjs/200',
        slug: 'intro-to-nextjs',
        category: 'tech',
        content: 'Next.js is a powerful React framework that enables features such as server-side rendering and generating static websites for React based web applications. Its a production-ready framework that allows you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.',
    },
    {
        id: "2",
        title: 'Exploring Paris',
        description: 'A journey through the City of Light, exploring its culture, cuisine, and hidden gems.',
        image: 'https://picsum.photos/seed/paris/200',
        slug: 'exploring-paris',
        category: 'travel',
        content: 'Paris, the capital of France, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
    },
    {
        id: "3",
        title: 'The Art of Sushi Making',
        description: 'Dive into the intricate world of sushi preparation and its cultural significance.',
        image: 'https://picsum.photos/seed/sushi/200',
        slug: 'sushi-making',
        category: 'food',
        content: 'Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is "sushi rice", also referred to as shari, or sumeshi.',
    },
];

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  content: string;
}

const BlogCard: React.FC<BlogPost> = ({ title, description, image, slug, category }) => (
  <Link href={`/dashboard/blogs/${category}/${slug}`} className="block">
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Image
        src={image}
        alt={title}
        width={400}
        height={225}
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      </div>
    </div>
  </Link>
);

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const posts = BlogList.filter((post: BlogPost) => post.category === category);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
        {category.charAt(0).toUpperCase() + category.slice(1)} Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: BlogPost) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const categories = Array.from(new Set(BlogList.map((post: BlogPost) => post.category)));
  return categories.map(category => ({ category }));
}
