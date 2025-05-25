'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useAuth } from '@/context/authContext';
import { Button } from '../ui/button';

export default function Navbar() {
  const { auth, setAuth } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isActive = (path) => pathname === path;
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Connect US', href: '/#connectus' },
    // { name: 'Contact', href: '/contact' },
  ];

  // const handleLogout = async () => {
  //   const res = await fetch('/api/auth/logout', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (res.ok) {
  //     setAuth({ isLoggedIn: false, user: null }); // Clear auth state
  //     router.push('/admin/login')
  //   } else {
  //     console.error('Logout failed');
  //   }
  // }

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl">
              <Image 
                src="/logo-removebg-preview.png" 
                alt="Atithi PG Logo" 
                fill
                priority
                className="object-contain scale-125 group-hover:scale-150 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Atithi Stay
              </span>
              <span className="text-[10px] text-slate-400 -mt-1">Premium PG Accommodation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-emerald-400 bg-emerald-500/10'
                    : 'text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="w-px h-6 bg-slate-700 mx-2" />
            
            {/* {auth.isLoggedIn ? (
              <Button 
              onClick={handleLogout}
              className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span>Log out</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            ) :(<Link 
              href="/admin/login" 
              className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span>Admin Portal</span>
              <ChevronRight className="h-4 w-4" />
            </Link>)} */}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* <Link
                  href="/admin/login"
                  className="block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin Portal
                </Link> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}