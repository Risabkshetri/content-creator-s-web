import { notFound } from 'next/navigation';
import Image from 'next/image';

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

interface Params {
  category: string;
  slug: string;
}

export default function BlogPost({ params }: { params: Params }) {
  const { slug, category } = params;
  const post = BlogList.find(post => post.category === category && post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto overflow-y-auto p-4 mt-16">
      <span className="text-sm text-gray-500">Category: {post.category}</span>
      <h1 className="text-3xl font-bold my-4">{post.title}</h1>
      <Image 
        src={post.image} 
        alt={post.title} 
        width={800}
        height={400}
        className="w-full h-64 object-cover mb-4" 
      />
      <p className="text-lg ">{post.content}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return BlogList.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}