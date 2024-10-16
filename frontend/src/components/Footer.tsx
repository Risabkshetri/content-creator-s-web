"use client"

import Link from 'next/link'
import Image from 'next/image'
import { FaYoutube, FaTwitter, FaInstagram, FaVideo, FaBlog, FaMicrophone, FaStream, FaStar, FaHeart, FaInfoCircle } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

function Footer({className = ''}) {
const pathname = usePathname();
const isDashboard = pathname.startsWith('/dashboard');

if(!isDashboard){
  return null;
}
  return (
    <footer className={`w-full py-8 bg-gray-100 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image 
              src="/images/logo.jpeg" 
              alt="Content Creator Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-sm text-gray-600">
              © {new Date().getFullYear()} Rishab Kshetri
            </span>
          </div>
          <nav className="flex flex-wrap gap-4 mt-4 sm:mt-0">
            {[
              { label: 'Videos', link: '/dashboard/videos', icon: <FaVideo className="inline-block mr-1 text-red-500" /> },
              { label: 'Blog', link: '/dashboard/blogs', icon: <FaBlog className="inline-block mr-1 text-blue-500" /> },
              { label: 'Podcasts', link: '/dashboard/podcasts', icon: <FaMicrophone className="inline-block mr-1 text-green-500" /> },
              { label: 'Live Streams', link: '/dashboard/live-streams', icon: <FaStream className="inline-block mr-1 text-purple-500" /> },
              { label: 'Membership', link: '#', icon: <FaStar className="inline-block mr-1 text-yellow-500" /> },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          {[
            { icon: <FaYoutube className="w-6 h-6 text-red-600" />, link: '#' },
            { icon: <FaTwitter className="w-6 h-6 text-blue-400" />, link: '#' },
            { icon: <FaInstagram className="w-6 h-6 text-pink-600" />, link: '#' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <Link href="#" className="hover:text-gray-700 mr-4">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-700">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer