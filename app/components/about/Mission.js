"use client";

import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Mission() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const circleRefs = useRef([]);

  useEffect(() => {
    if (inView && circleRefs.current) {
      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          setTimeout(() => {
            circle.classList.add("scale-100", "opacity-100");
          }, index * 150);
        }
      });
    }
  }, [inView]);

  // For simplicity, we're creating these manually
  // In a real app, this would likely come from a CMS or data file
  const missionPoints = [
    {
      title: "Innovation",
      description:
        "Pushing boundaries and challenging conventions in interactive experiences.",
      icon: "✨",
    },
    {
      title: "Inclusion",
      description:
        "Creating spaces that welcome and inspire people from all backgrounds.",
      icon: "🌈",
    },
    {
      title: "Impact",
      description:
        "Building technology that makes a meaningful difference in people's lives.",
      icon: "💡",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600">
            We&apos;re on a mission to redefine how people interact with digital
            spaces, creating environments that inspire creativity, foster
            connections, and push the boundaries of what&apos;s possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                ref={(el) => (circleRefs.current[index] = el)}
                className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6 text-3xl transform scale-0 opacity-0 transition-all duration-500"
              >
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-purple-700 font-medium">
          &ldquo;We don&apos;t just build products; we create experiences that change how
            people see and interact with the digital world.&ldquo;
          </p>
        </div>
      </div>
    </section>
  );
}
