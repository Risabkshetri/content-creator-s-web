'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';

const faqs = [
  {
    question: "What type of content do you create?",
    answer: "I create a variety of content including tech tutorials, coding challenges, and discussions about the latest trends in software development and technology."
  },
  {
    question: "How often do you upload new videos?",
    answer: "I aim to upload new videos twice a week, usually on Tuesdays and Fridays. However, this may vary depending on the complexity of the content and my current projects."
  },
  {
    question: "Can I suggest topics for future videos?",
    answer: "Absolutely! I love hearing from my audience. You can suggest topics through the comments section of my videos or by reaching out via the contact form on my website."
  },
  {
    question: "Do you offer one-on-one coaching or mentoring?",
    answer: "Currently, I don't offer individual coaching, but I do occasionally host live Q&A sessions for my Patreon supporters where I answer questions and provide guidance."
  },
  {
    question: "How can I support your channel?",
    answer: "There are several ways to support the channel: subscribing and engaging with my content, sharing my videos, becoming a Patreon supporter, or purchasing merchandise from my store. Every bit of support is greatly appreciated!"
  }
];


const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200 py-4"
      initial={false}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IconChevronDown className="w-5 h-5 text-gray-500" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p className="mt-2 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 mt-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
