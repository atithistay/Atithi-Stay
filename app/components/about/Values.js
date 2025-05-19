'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Values() {
  const [activeValue, setActiveValue] = useState(0);
  
  const values = [
    {
      title: "Creativity Without Limits",
      description: "We believe in giving creators the freedom to explore, experiment, and push boundaries without constraints.",
      image: "/about/values-creativity.jpg"
    },
    {
      title: "Human-Centered Design",
      description: "Every experience we build starts and ends with the humans who will use it, focusing on delight, accessibility, and intuitive interaction.",
      image: "/about/values-design.jpg"
    },
    {
      title: "Constant Evolution",
      description: "We embrace change, learn from every iteration, and continuously evolve our approach to stay at the forefront of interactive experiences.",
      image: "/about/values-evolution.jpg"
    },
    {
      title: "Ethical Innovation",
      description: "We're committed to developing technology responsibly, considering the broader impact of our work on individuals and communities.",
      image: "/about/values-ethics.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-300">
            These principles guide everything we do, from how we build our products to how we work together as a team.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <motion.div 
                key={activeValue}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image 
                  src={values[activeValue].image} 
                  alt={values[activeValue].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8">
                <motion.h3 
                  key={`title-${activeValue}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl font-bold mb-2"
                >
                  {values[activeValue].title}
                </motion.h3>
                <motion.p
                  key={`desc-${activeValue}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-200"
                >
                  {values[activeValue].description}
                </motion.p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="space-y-6">
              {values.map((value, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-6 rounded-lg transition-all ${
                    activeValue === index 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveValue(index)}
                >
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className={`inline-block w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                      activeValue === index ? 'bg-white text-purple-600' : 'bg-gray-700'
                    }`}>
                      {index + 1}
                    </span>
                    {value.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}