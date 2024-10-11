'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, isAuthenticated } from '@/lib/auth';
import { User } from '@/types';
import Homepage from '@/components/home/Homepage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated()) {
        router.push('/login');
      } else {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        } else {
          router.push('/login');
        }
      }
    };

    checkAuth();
  }, [router]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="md:px-32 px-1">
        <Homepage />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}