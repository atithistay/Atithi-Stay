// components/about/AboutStats.js
"use client";

import { useEffect, useState, useRef } from "react";

export default function AboutStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 5000,
      label: "Happy Residents",
      suffix: "+",
      color: "bg-indigo-600",
    },
    { number: 500, label: "PG Properties", suffix: "+", color: "bg-rose-500" },
    { number: "mumbai", label: "City Covered", suffix: "", color: "bg-amber-500" },
    {
      number: 98,
      label: "Customer Satisfaction",
      suffix: "%",
      color: "bg-emerald-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact By The Numbers
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-800 shadow-lg border border-gray-700 transform hover:scale-105 transition-transform"
            >
              <div
                className={`w-16 h-16 ${stat.color} rounded-full mx-auto flex items-center justify-center mb-4`}
              >
                <span className="text-xl font-bold">#{index + 1}</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {isVisible ? (
                  <>
                    {stat.number.toLocaleString()}
                    {stat.suffix}
                  </>
                ) : (
                  "0"
                )}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-indigo-900/50 backdrop-blur-sm rounded-xl border border-indigo-800/50 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                We're Just Getting Started
              </h3>
              <p className="text-indigo-100">
                Since our launch in 2025, we've been on a mission to transform
                the PG accommodation industry. With thousands of successful
                bookings and happy residents, we continue to grow and improve
                our services to meet the evolving needs of our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
