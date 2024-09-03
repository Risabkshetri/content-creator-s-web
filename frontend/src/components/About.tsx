"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 relative">
            <div className="absolute inset-0 filter blur-md opacity-75"></div>
            <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/profile1.png"
                width={300}
                height={400}
                alt="Rishab Kshetri"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          </div>
          <div className="w-full lg:w-2/3 lg:pl-12">
            <h3 className="text-xl text-indigo-600 font-semibold mb-2">Who is</h3>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Rishab Kshetri?</h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Rishab Kshetri is a passionate technologist and problem solver with a strong background in web development. He founded KshetriAI to help businesses thrive in the digital age by delivering innovative and affordable web solutions. Rishab&apos;s commitment to excellence and belief in the power of technology drive him to consistently exceed client expectations, making KshetriAI a trusted partner for small businesses and startups.
            </p>
            <div className="mt-6">
              <a href="#contact" className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
