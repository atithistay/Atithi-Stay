'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MapPin, Building2, Users } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900">
      {/* Background with modern overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src="/herosection.jpg"
          alt="Background PG Scene"
          fill
          className="absolute inset-0 object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-1 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-emerald-400 text-sm font-medium">Live Availability</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Find Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Home Away
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-slate-300 text-lg md:text-xl mb-8 max-w-xl"
            >
              Discover comfortable and affordable PG accommodations tailored to your needs. Join thousands of satisfied residents who found their ideal living space.
            </motion.p>

            {/* Search bar */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <div className="relative flex-1 max-w-md">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-slate-700 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                Search PGs
              </button>
            </motion.div> */}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { icon: Building2, label: 'Listed PGs', value: '500+' },
                { icon: Users, label: 'Happy Residents', value: '2000+' },
                { icon: MapPin, label: 'Locations', value: '50+' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Featured card */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-semibold text-white">Featured PG</h3>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm">Available</span>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/featured-pg.jpg"
                    alt="Featured PG"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-medium">Sunshine Residency</h4>
                  <p className="text-slate-400 text-sm">Premium PG accommodation with modern amenities and comfortable living spaces.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-400 font-semibold">₹15,000/month</span>
                    <Link
                      href="/pg/featured"
                      className="text-sm text-white bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}

          {/* scroller indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-1 h-1 rounded-full bg-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden text-white font-sans">
//       {/* Background image with parallax effect */}
//       <motion.div
//         initial={{ scale: 1.2 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
//         className="absolute inset-0"
//       >
//         <Image
//           src="/herosection.jpg"
//           alt="Background PG Scene"
//           fill
//           className="absolute inset-0 object-cover"
//           priority
//         />
//       </motion.div>

//       {/* Enhanced gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent z-0" />

//       {/* Content container with improved positioning */}
//       <div className="relative z-1 flex flex-col justify-center items-start h-full px-8 md:px-20 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-2xl"
//         >
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="inline-block text-sm md:text-base font-medium tracking-widest uppercase px-6 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-200"
//           >
//             Your Home Away From Home
//           </motion.span>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//             className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
//           >
//             <span className="text-emerald-300 font-light">
//               Welcome to
//             </span>
//             <br />
//             <span className="text-emerald-300 font-extrabold tracking-wide drop-shadow-lg">Athiti Stay</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9 }}
//             className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8 font-light tracking-wide"
//           >
//             Experience comfort, affordability, and convenience in one place. Your ideal PG stay is just a click away.
//           </motion.p>

//         </motion.div>
//       </div>
//     </section>
//   );
// }