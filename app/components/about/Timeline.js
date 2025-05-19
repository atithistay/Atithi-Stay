'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Timeline() {
  const timelineEvents = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded in a small co-working space with just 3 team members and a vision to change how people interact with digital spaces."
    },
    {
      year: "2019",
      title: "First Product Launch",
      description: "Released our first interactive experience platform, attracting over 10,000 users in the first month."
    },
    {
      year: "2021",
      title: "Major Funding",
      description: "Secured $5M in Series A funding to expand our team and develop our core technology."
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Opened offices in London and Tokyo, expanding our team to over 50 talented individuals worldwide."
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Received innovation awards for our groundbreaking approach to interactive design and user experience."
    },
    {
      year: "2024",
      title: "Community Milestone",
      description: "Reached 1 million active users across our platforms and launched our creator community program."
    }
  ];

  // Set up refs for animation
  const lineRef = useRef(null);
  const eventRefs = useRef([]);

  // Set up intersection observer
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Handle animations when section comes into view
  useEffect(() => {
    if (inView) {
      // Animate the line
      if (lineRef.current) {
        lineRef.current.style.height = '100%';
      }

      // Animate each event with a delay
      eventRefs.current.forEach((event, index) => {
        if (event) {
          setTimeout(() => {
            event.classList.add('opacity-100', 'translate-x-0');
          }, 300 + index * 200);
        }
      });
    }
  }, [inView]);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600">
            From humble beginnings to where we are today, every step has shaped our mission and vision.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto pt-10 pb-20">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200">
            <div 
              ref={lineRef} 
              className="w-full bg-gradient-to-b from-purple-500 to-indigo-600 h-0 transition-all duration-1000 ease-out"
            ></div>
          </div>

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <div 
              key={index}
              className={`relative mb-16 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
            >
              <div 
                ref={el => eventRefs.current[index] = el}
                className={`
                  inline-block w-1/2 p-6 bg-white rounded-lg shadow-lg border border-gray-100
                  ${index % 2 === 0 
                    ? 'mr-8 opacity-0 translate-x-8' 
                    : 'ml-8 opacity-0 -translate-x-8'
                  }
                  transition-all duration-700 ease-out
                `}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-3">
                  {event.year}
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>

              {/* Circle marker */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-purple-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}