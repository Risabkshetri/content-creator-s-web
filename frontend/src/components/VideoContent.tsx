import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBrandYoutube,
  IconMovie,
  IconLivePhoto,
  IconDeviceTv,
  IconBrandTiktok,
  IconBrandInstagram,
  IconBrandTwitch,
} from "@tabler/icons-react";
import Image from "next/image";

export function VideoContent() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const VideoThumbnail = ({ src }: { src: string }) => (
  <div className="relative w-full h-32 md:h-48 rounded-xl overflow-hidden">
    <Image
      src={src}
      alt="Video thumbnail"
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-300 hover:scale-110"
    />
  </div>
);

const items = [
  {
    title: "Latest YouTube Video",
    description: "Check out my newest upload on game development tips!",
    header: <VideoThumbnail src="/images/youtube-thumbnail.jpg" />,
    icon: <IconBrandYoutube className="h-5 w-5 text-red-500" />,
  },
  {
    title: "Behind-the-Scenes",
    description: "Exclusive look at my content creation process.",
    header: <VideoThumbnail src="/images/bts-thumbnail.jpg" />,
    icon: <IconMovie className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Live Coding Session",
    description: "Join me for a real-time problem-solving stream!",
    header: <VideoThumbnail src="/images/live-coding-thumbnail.jpg" />,
    icon: <IconLivePhoto className="h-5 w-5 text-green-500" />,
  },
  {
    title: "Tech Review Series",
    description: "In-depth looks at the latest gadgets and tools for creators.",
    header: <VideoThumbnail src="/images/tech-review-thumbnail.jpg" />,
    icon: <IconDeviceTv className="h-5 w-5 text-purple-500" />,
  },
  {
    title: "TikTok Highlights",
    description: "Quick tips and tricks in bite-sized videos.",
    header: <VideoThumbnail src="/images/tiktok-thumbnail.jpg" />,
    icon: <IconBrandTiktok className="h-5 w-5 text-pink-500" />,
  },
  {
    title: "Instagram Reels",
    description: "Sneak peeks and daily life as a content creator.",
    header: <VideoThumbnail src="/images/instagram-thumbnail.jpg" />,
    icon: <IconBrandInstagram className="h-5 w-5 text-orange-500" />,
  },
  {
    title: "Twitch Stream VODs",
    description: "Catch up on my latest gaming and coding streams.",
    header: <VideoThumbnail src="/images/twitch-thumbnail.jpg" />,
    icon: <IconBrandTwitch className="h-5 w-5 text-purple-600" />,
  },
];
