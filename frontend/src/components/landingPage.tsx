'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 mb-6 relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-purple-600 rounded-lg">
              <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border-4 border-white rounded-full"></div>
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Alex Mangunum
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Transforming ideas into engaging content across YouTube, Instagram, LinkedIn, and Twitter. Let&apos;s make your brand stand out!
          </p>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/login"
                className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors shadow-lg"
              >
                Login
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/register"
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-100 transition-colors shadow-lg"
              >
               Register
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg mb-16 overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Who is Alex Creative?</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-gray-600 mb-4">
                  Hey there! I&apos;m Alex, a passionate content creator with a knack for storytelling across digital platforms. With 5+ years of experience, I specialize in crafting engaging content that resonates with audiences and drives results.
                </p>
                <p className="text-gray-600">
                  Whether you&apos;re looking to boost your YouTube presence, create scroll-stopping Instagram posts, build your professional brand on LinkedIn, or spark conversations on Twitter, I&apos;ve got you covered. Let&apos;s work together to bring your vision to life and grow your online community!
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-1/3 aspect-square bg-purple-200 rounded-full flex items-center justify-center overflow-hidden"
              >
                <Image 
                  src="https://res.cloudinary.com/dufaxdxsj/image/upload/v1729185214/rkuqmo7i_qr4brp.png" 
                  alt="Alex Creative" 
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.8 }}
            href="#"
            className="text-gray-600 hover:text-purple-600"
            aria-label="YouTube"
          >
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 border-2 border-current rounded-sm"></div>
              <div className="absolute inset-2 bg-current transform rotate-45"></div>
            </div>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.8 }}
            href="#"
            className="text-gray-600 hover:text-purple-600"
            aria-label="Instagram"
          >
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 border-2 border-current rounded-lg"></div>
              <div className="absolute inset-2 border-2 border-current rounded-full"></div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-current rounded-full"></div>
            </div>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.8 }}
            href="#"
            className="text-gray-600 hover:text-purple-600"
            aria-label="Twitter"
          >
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 border-2 border-current rounded-full"></div>
              <div className="absolute inset-2 transform -rotate-45">
                <div className="w-full h-1 bg-current rounded-full"></div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}