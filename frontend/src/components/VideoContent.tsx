import React from 'react';
import { Video } from '@/lib/api';
import Image from "next/image";
import Link from 'next/link';
import {
  IconBrandYoutube,
  IconMovie,
  IconLivePhoto,
  IconDeviceTv,
  IconBrandTiktok,
  IconBrandInstagram,
  IconBrandTwitch,
} from "@tabler/icons-react";

interface VideoContentProps {
  videos: Video[];
}

export const VideoContent: React.FC<VideoContentProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
      {videos.map((video, i) => (
        <div
          key={video.id}
          className={`bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
            i === 3 || i === 6 ? "md:col-span-2" : ""
          }`}
        >
          <Link href={video.videoUrl}>
          <div className="relative h-48 w-full">
            <Image
              src={video.thumbnail}
              alt={video.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-red-600 text-4xl">▶️</div>
            </div>
          </div>
          </Link>
          <div className="p-4">
            <div className="flex items-center mb-2">
              {getIconForCategory(video.category)}
              <h3 className="text-lg font-semibold ml-2 text-gray-800 dark:text-gray-200">{video.title}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{video.description}</p>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{formatDuration(video.duration)}</span>
              <span>{formatViews(video.views)} views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const getIconForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'youtube':
      return <IconBrandYoutube className="h-5 w-5 text-red-500" />;
    case 'behind-the-scenes':
      return <IconMovie className="h-5 w-5 text-blue-500" />;
    case 'live-coding':
      return <IconLivePhoto className="h-5 w-5 text-green-500" />;
    case 'tech-review':
      return <IconDeviceTv className="h-5 w-5 text-purple-500" />;
    case 'tiktok':
      return <IconBrandTiktok className="h-5 w-5 text-pink-500" />;
    case 'instagram':
      return <IconBrandInstagram className="h-5 w-5 text-orange-500" />;
    case 'twitch':
      return <IconBrandTwitch className="h-5 w-5 text-purple-600" />;
    default:
      return <IconMovie className="h-5 w-5 text-gray-500" />;
  }
};

const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
};
