"use client";
// components/about/AboutTeam.js
import Image from "next/image";

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Mr. Sarvendra Singh",
      position: "Office Manager",
      bio: "With extensive experience in operations management, Sarvendra ensures our office runs smoothly while maintaining the highest standards of customer service and team efficiency.",
      imageSrc: "/sarvendraSingh.jpeg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "sarvendra@atithistay.com",
      },
    },
    {
      name: "Mr. Amar Singh",
      position: "Co-founder",
      bio: "As a co-founder, Amar brings his vision and entrepreneurial spirit to Atithi Stay, driving innovation and strategic growth to transform the PG accommodation sector.",
      imageSrc: "/amarSingh.jpeg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "amar@atithistay.com",
      },
    },
    {
      name: "Mr. Shivang Singh",
      position: "Property Listing Manager",
      bio: "Shivang oversees our property listing process, ensuring all accommodations meet our quality standards and are presented with accurate, detailed information for potential residents.",
      imageSrc: "/shivangSingh.jpeg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "shivang@atithistay.com",
      },
    },
    {
      name: "Mr. Aman Yadav",
      position: "Marketing Executive",
      bio: "Aman leads our marketing efforts with creativity and data-driven strategies, helping connect property owners with potential residents through compelling campaigns.",
      imageSrc: "/amanYadav.jpeg",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "aman@atithistay.com",
      },
    },
  ];

  return (
    <section id="ourteam" className="py-16 pb-0 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of professionals works tirelessly to provide you
            with the best PG accommodation experience.
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback for missing images
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      member.name
                    )}&background=6366F1&color=fff&size=262`;
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
