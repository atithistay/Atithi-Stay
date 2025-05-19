"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "Former UX designer turned entrepreneur with a passion for creating meaningful digital experiences. Alex founded Playground with the vision of breaking down barriers between technology and creativity.",
      image: "/about/team-alex.jpg",
      links: {
        twitter: "https://twitter.com/alexmorgan",
        linkedin: "https://linkedin.com/in/alexmorgan",
      },
    },
    {
      name: "Jamie Chen",
      role: "Chief Technology Officer",
      bio: "With 15+ years of experience in interactive technologies and a background in game development, Jamie leads our technical innovation and ensures our platforms are both cutting-edge and accessible.",
      image: "/about/team-jamie.jpg",
      links: {
        twitter: "https://twitter.com/jamietech",
        linkedin: "https://linkedin.com/in/jamiechen",
      },
    },
    {
      name: "Taylor Williams",
      role: "Creative Director",
      bio: "Award-winning designer with expertise in spatial and interactive design. Taylor oversees the creative vision for all Playground experiences and pushes our team to think beyond conventional design.",
      image: "/about/team-taylor.jpg",
      links: {
        twitter: "https://twitter.com/taylordesigns",
        linkedin: "https://linkedin.com/in/taylorwilliams",
      },
    },
    {
      name: "Sam Patel",
      role: "Head of Product",
      bio: "Product visionary with a knack for translating user needs into innovative features. Sam leads our product strategy and roadmap, ensuring we're always solving real problems in delightful ways.",
      image: "/about/team-sam.jpg",
      links: {
        twitter: "https://twitter.com/sampatel",
        linkedin: "https://linkedin.com/in/sampatel",
      },
    },
    {
      name: "Jordan Lee",
      role: "Head of Community",
      bio: "Community builder and former event manager who believes in the power of bringing people together. Jordan ensures our users feel supported, heard, and inspired to create amazing things.",
      image: "/about/team-jordan.jpg",
      links: {
        twitter: "https://twitter.com/jordanbuilds",
        linkedin: "https://linkedin.com/in/jordanlee",
      },
    },
    {
      name: "Casey Rivera",
      role: "Lead Engineer",
      bio: "Full-stack developer with a background in 3D graphics and real-time rendering. Casey leads our engineering team in building robust, scalable systems that power our interactive experiences.",
      image: "/about/team-casey.jpg",
      links: {
        twitter: "https://twitter.com/caseydev",
        linkedin: "https://linkedin.com/in/caseyrivera",
      },
    },
  ];

  const teamGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const teamMemberVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const handleMemberClick = (index) => {
    setActiveTeamMember(activeTeamMember === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            The talented individuals behind our vision, bringing diverse skills
            and perspectives to create extraordinary experiences.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={teamGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={teamMemberVariants}
              className={`
                bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300
                ${
                  activeTeamMember === index
                    ? "ring-4 ring-purple-400 scale-[1.02]"
                    : "hover:shadow-xl"
                }
              `}
              onClick={() => handleMemberClick(index)}
            >
              <div className="relative h-64 cursor-pointer">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-200">{member.role}</p>
                </div>
              </div>

              {activeTeamMember === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6"
                >
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Twitter
                    </a>
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900"
                    >
                      LinkedIn
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Interested in joining our team?
          </p>
          <a
            href="/careers"
            className="inline-block px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
}
