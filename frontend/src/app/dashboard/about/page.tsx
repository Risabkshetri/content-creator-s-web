'use client'

import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export default function Page() {
  const data = [
    {
      title: "2024",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Milestone Year
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Reached 1 million subscribers and launched a successful podcast
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/million-subs.avif"
              alt="1 Million Subscribers"
              width={500}
              height={500}
              className="rounded-xl object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/podcast-studio.avif"
              alt="Podcast Studio"
              width={500}
              height={500}
              className="rounded-xl object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </motion.div>
      ),
    },
    {
      title: "2023",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-600">
            Expansion & Collaboration
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Diversified content across platforms and collaborated with industry leaders
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/collab-video.webp"
              alt="Collaboration Video"
              width={500}
              height={500}
              className="rounded-xl object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <Image
              src="/images/tiktok-growth.avif"
              alt="TikTok Growth"
              width={500}
              height={500}
              className="rounded-xl object-cover h-32 md:h-48 w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </motion.div>
      ),
    },
    {
      title: "2022",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
            The Beginning
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Launched the channel and published first viral video
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>First YouTube video published</span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Reached 10,000 subscribers</span>
            </div>
            <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>First brand partnership</span>
            </div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16 bg-slate-100">
      <Timeline data={data} />
    </div>
  );
}
