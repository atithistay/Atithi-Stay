'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'IT Professional',
      text: 'Finding a good PG was always a hassle until I discovered Atithi PG. The platform made it incredibly easy to find a comfortable place near my office. Highly recommended!',
      bgColor: 'bg-emerald-100',
      textColor: 'text-emerald-700'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'College Student',
      text: 'As a student moving to a new city, I was anxious about accommodation. Atithi PG helped me find a safe and affordable PG with good food and amenities. So grateful!',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700'
    },
    {
      id: 3,
      name: 'Arun Kumar',
      role: 'Working Professional',
      text: 'The detailed filters and verified listings on Atithi PG saved me so much time. Found a well-furnished PG with like-minded roommates in just a day!',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="relative">
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center ${testimonials[activeIndex].bgColor}`}>
                    <span className="text-4xl font-bold">{testimonials[activeIndex].name[0]}</span>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                    "{testimonials[activeIndex].text}"
                  </p>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].name}</h4>
                    <p className={`font-medium ${testimonials[activeIndex].textColor}`}>
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-12 h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-emerald-500' : 'bg-gray-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 pointer-events-auto"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 pointer-events-auto"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}