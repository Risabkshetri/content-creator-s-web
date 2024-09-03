"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import SidebarDemo from "./SidebarDemo";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const DesktopMenu = () => (
    <Menu setActive={setActive}>
        <div className="text-slate-950 hover:text-800 ">
          <Link href="/">Home</Link>
        </div>
      <MenuItem setActive={setActive} active={active} item="Content">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/videos">Videos</HoveredLink>
          <HoveredLink href="/blog">Blog Posts</HoveredLink>
          <HoveredLink href="/podcasts">Podcasts</HoveredLink>
          <HoveredLink href="/live-streams">Live Streams</HoveredLink>
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Featured">
        <div className="text-sm grid grid-cols-2 gap-10 p-4">
          <ProductItem
            title="Latest Video"
            href="/videos/latest"
            src="/images/recentvideo.png"
            description="Check out my most recent video content."
          />
          <ProductItem
            title="Popular Blog Post"
            href="/blog/popular"
            src="/images/blogpost.png"
            description="Read my most popular blog post of the month."
          />
          <ProductItem
            title="New Podcast Episode"
            href="/podcasts/new"
            src="/images/podcast.png"
            description="Listen to the latest episode of my podcast series."
          />
          <ProductItem
            title="Upcoming Live Stream"
            href="/live-streams/upcoming"
            src="/images/livestreame.png"
            description="Join my next live stream event and interact in real-time."
          />
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Support">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/membership">Membership</HoveredLink>
          <HoveredLink href="/merch">Merchandise</HoveredLink>
          <HoveredLink href="/donate">Donate</HoveredLink>
          <HoveredLink href="/patreon">Patreon</HoveredLink>
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="About">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/bio">Bio</HoveredLink>
          <HoveredLink href="/contact">Contact</HoveredLink>
          <HoveredLink href="/faq">FAQ</HoveredLink>
          <HoveredLink href="/press">Press Kit</HoveredLink>
        </div>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={cn("fixed top-0 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      {isMobile ? (
        <SidebarDemo />
      ) : (
        <DesktopMenu />
      )}
    </div>
  );
}
