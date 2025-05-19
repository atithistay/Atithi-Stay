// components/about/AboutHero.js
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0 L40 0 L40 40 L0 40 Z"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Finding Your <span className="text-yellow-300">Perfect PG</span>{" "}
              Made Simple
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Discover who we are, our mission, and how we've helped thousands
              find their ideal PG accommodation with comfort and ease.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/listings"
                className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Browse PGs
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-hero.jpg"
                alt="Modern PG accommodation"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative"
                    >
                      <Image
                        src={`/images/user-${i}.jpg`}
                        alt="Happy customer"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    5,000+ Happy Residents
                  </p>
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
