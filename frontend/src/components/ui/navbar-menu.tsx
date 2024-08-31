"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer ${
          isDark ? "text-gray-200 hover:text-white" : "text-gray-800 hover:text-black"
        }`}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className={`${
                  isDark
                    ? "bg-gray-900 border-gray-700"
                    : "bg-white border-gray-200"
                } backdrop-blur-sm rounded-2xl overflow-hidden border shadow-xl`}
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={`relative rounded-xl border ${
        isDark
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      } shadow-lg flex justify-center space-x-8 px-8 py-6`}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className={`text-xl font-bold mb-1 ${
          isDark ? "text-white" : "text-gray-900"
        }`}>
          {title}
        </h4>
        <p className={`text-sm max-w-[10rem] ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Link
      {...rest}
      className={`${
        isDark
          ? "text-gray-300 hover:text-white"
          : "text-gray-600 hover:text-gray-900"
      } transition-colors duration-200`}
    >
      {children}
    </Link>
  );
};
