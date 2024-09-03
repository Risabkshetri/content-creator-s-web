"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export default function Services() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BackgroundGradient className="rounded-[22px] p-6  dark:bg-zinc-900">
          <div className="flex flex-col items-center">
            <IconAppWindow className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">Content Creation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              Custom content tailored to your brand, designed to engage and inspire your audience.
            </p>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] p-6  dark:bg-zinc-900">
          <div className="flex flex-col items-center">
            <IconAppWindow className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">Social Media Management</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              Engaging social media strategies to boost your online presence and connect with your audience.
            </p>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] p-6  dark:bg-zinc-900">
          <div className="flex flex-col items-center">
            <IconAppWindow className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Brand Collaborations</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              Partnerships that align with your vision, helping you reach new audiences and grow your brand.
            </p>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
