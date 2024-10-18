"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconMovie } from "@tabler/icons-react";

type Card = {
  title: string;
  src: string;
};

const VideoCard = ({ card, onClick }: { card: Card; onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <Image
      src={card.src}
      alt={card.title}
      width={300}
      height={200}
      className="object-cover w-full h-48"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
      <IconMovie size={24} color="white" />
      <h3 className="text-white text-lg font-semibold ml-2">{card.title}</h3>
    </div>
  </motion.div>
);

export function FocusCards({ cards }: { cards: Card[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <VideoCard key={card.title} card={card} onClick={() => alert("Video content is coming soon!")} />
      ))}
    </div>
  );
}
