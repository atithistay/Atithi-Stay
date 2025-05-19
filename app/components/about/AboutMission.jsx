// components/about/AboutMission.js
import Image from "next/image";

export default function AboutMission() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/teamPhoto.jpeg"
              alt="Our mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="font-medium text-lg">
                  "We believe everyone deserves a comfortable place to call
                  home."
                </p>
                <p className="text-sm opacity-80">- Atithi Stay Founding Team</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 border-l-4 border-indigo-600 bg-indigo-50 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To revolutionize the PG accommodation experience by connecting
                residents with quality, affordable living spaces and empowering
                property owners with the tools to succeed.
              </p>
            </div>

            <div className="p-6 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700">
                A world where finding and managing PG accommodations is
                transparent, efficient, and stress-free for everyone involved.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Core Values
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Transparency",
                    desc: "Clear, honest communication in all our operations",
                  },
                  {
                    title: "Quality",
                    desc: "Ensuring high standards for all listed accommodations",
                  },
                  {
                    title: "Accessibility",
                    desc: "Making PG search simple for everyone",
                  },
                  {
                    title: "Innovation",
                    desc: "Constantly improving our platform and services",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm"
                  >
                    <div className="bg-indigo-100 p-2 rounded-full text-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-600">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
