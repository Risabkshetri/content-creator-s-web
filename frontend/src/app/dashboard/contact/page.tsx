'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube, IconMail, IconPhone, IconSend } from '@tabler/icons-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Get in Touch
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Have a question or want to collaborate? Reach out to me!
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-1"
            >
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-200">Contact Information</h3>
                <p className="mt-1 text-sm text-gray-300">
                  Feel free to reach out through any of these channels:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <IconMail className="h-6 w-6 text-purple-400" />
                    <span className="ml-3 text-gray-300">contact@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <IconPhone className="h-6 w-6 text-purple-400" />
                    <span className="ml-3 text-gray-300">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-200">Follow me</h4>
                  <div className="mt-4 flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      <IconBrandYoutube className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      <IconBrandInstagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      <IconBrandTwitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-5 md:mt-0 md:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="given-name"
                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white"
                        required
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm text-white"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-700 text-right sm:px-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    <IconSend className="mr-2 h-4 w-4" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

