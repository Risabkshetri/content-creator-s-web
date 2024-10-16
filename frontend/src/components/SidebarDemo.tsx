"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconHome,
  IconVideo,
  IconArticle,
  IconMicrophone,
  IconLivePhoto,
  IconStar,
  IconHeart,
  IconInfoCircle,
  IconLogout,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navContent = {
  Content: [
    { href: "/dashboard/videos", label: "Videos", icon: <IconVideo /> },
    { href: "/dashboard/blogs", label: "Blog Posts", icon: <IconArticle /> },
    { href: "/dashboard/podcasts", label: "Podcasts", icon: <IconMicrophone /> },
    { href: "/dashboard/live-streams", label: "Live Streams", icon: <IconLivePhoto /> }
  ],
  Featured: [
    {
      title: "Latest Video",
      href: "/dashboard/videos/latest",
      src: "/images/recentvideo.png",
      description: "Check out my most recent video content."
    },
    {
      title: "Popular Blog Post",
      href: "/dashboard/blogs/popular",
      src: "/images/blogpost.png",
      description: "Read my most popular blog post of the month."
    },
    {
      title: "New Podcast Episode",
      href: "/podcasts/new",
      src: "/images/podcast.png",
      description: "Listen to the latest episode of my podcast series."
    },
    {
      title: "Upcoming Live Stream",
      href: "/dashboard/live-streams/upcoming",
      src: "/images/livestreame.png",
      description: "Join my next live stream event and interact in real-time."
    }
  ],
  Support: [
    { href: "#", label: "Membership", icon: <IconStar className="text-black"/> },
    { href: "#", label: "Merchandise", icon: <IconHeart className="text-black" /> },
    { href: "#", label: "Donate", icon: <IconHeart className="text-black" /> },
    { href: "#", label: "Patreon", icon: <IconHeart className="text-black" /> }
  ],
  About: [
    { href: "/dashboard/bio", label: "Bio", icon: <IconInfoCircle className="text-black" /> },
    { href: "/dashboard/contact", label: "Contact", icon: <IconInfoCircle className="text-black" /> },
    { href: "/dashboard/faq", label: "FAQ", icon: <IconInfoCircle className="text-black" /> },
    { href: "#", label: "Press Kit", icon: <IconInfoCircle className="text-black" /> }
  ]
};

export default function SidebarDemo(){
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) { // Check if it's a small device
      setOpen(false);
    }
  };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto overflow-hidden"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              <SidebarLink
                link={{
                  label: "Home",
                  href: "#",
                  icon: <IconHome className="text-black h-5 w-5 flex-shrink-0" />
                }}
                onClick={handleLinkClick}
              />
              {Object.entries(navContent).map(([category, items]) => (
                <div key={category} className="mt-4">
                  <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2 px-4">{category}</h3>
                  {items.map((item, idx) => (
                    <SidebarLink
                      key={idx}
                      link={{
                        label: 'label' in item ? item.label : item.title,
                        href: item.href,
                        icon: 'icon' in item ? item.icon : <IconStar className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                      }}
                      onClick={handleLinkClick}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Logout",
                href: "#",
                icon: <IconLogout className="text-black h-5 w-5 flex-shrink-0" />
              }}
              onClick={handleLinkClick}
            />
            <SidebarLink
              link={{
                label: "Rishab Kshetri",
                href: "#",
                icon: (
                  <Image
                    src="/images/profile.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
              onClick={handleLinkClick}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black whitespace-pre"
      >
       Rishab Kshetri
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
// const Dashboard = () => {
//   return (
//     <div className="flex flex-1">
//       <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
//         <div className="flex gap-2">
//           {[...new Array(4)].map((_, i) => (
//             <div
//               key={"first-array" + i}
//               className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
//             ></div>
//           ))}
//         </div>
//         <div className="flex gap-2 flex-1">
//           {[...new Array(2)].map((_, i) => (
//             <div
//               key={"second-array" + i}
//               className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
