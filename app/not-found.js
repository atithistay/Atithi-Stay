'use client';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-blue-600 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! It seems like you've wandered off to an unexplored corner of Atithi Stay. Let's get you back on track.
        </p>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg blur opacity-25"></div>
          <Link 
            href="/"
            className="relative flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Link>
        </div>
      </div>
      
    </div>
  );
}