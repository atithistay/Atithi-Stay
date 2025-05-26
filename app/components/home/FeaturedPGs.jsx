"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
  Wifi,
  Utensils,
  Coffee,
  CheckCircle,
  Zap,
  Calendar,
} from "lucide-react";
import samplePG from "@/samplePg";
import Select from "react-select";

function PGCard({ pg }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % pg.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + pg.images.length) % pg.images.length
    );
  };

  // Get lowest priced room for rent display
  const minRentRoom = pg.rooms
    ? pg.rooms.reduce(
        (min, room) => (room.rent < min.rent ? room : min),
        pg.rooms[0]
      )
    : { rent: pg.min_rent };

  // Get available sharing types
  const sharingTypes = pg.rooms
    ? [
        ...new Set(
          pg.rooms
            .map((room) => {
              switch (room.type) {
                case "single":
                case "master":
                case "common":
                  return "1";
                case "double":
                case "master_double":
                case "common_double":
                  return "2";
                case "triple":
                  return "3";
                case "quad":
                  return "4";
                default:
                  return null;
              }
            })
            .filter(Boolean)
        ),
      ].sort()
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-72 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-full w-full"
          >
            <Image
              src={
                pg.images[currentImageIndex].url || "/api/placeholder/600/400"
              }
              alt={
                pg.images[currentImageIndex].caption ||
                `${pg.name} - Image ${currentImageIndex + 1}`
              }
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-5 w-5 text-gray-800" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-5 w-5 text-gray-800" />
        </button>

        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            {pg.rating}
          </div>
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
            {pg.gender === "male"
              ? "Boys PG"
              : pg.gender === "female"
              ? "Girls PG"
              : "Unisex PG"}
          </div>

          {pg.verified && (
            <div className="bg-emerald-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              Verified
            </div>
          )}
        </div>

        {pg.images[currentImageIndex]?.caption && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white">
            {pg.images[currentImageIndex].caption}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pg.name}</h3>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 flex-shrink-0 mr-2" />
          <p className="text-sm">
            {pg.area}, {pg.city}
            {pg.nearby && pg.nearby.length > 0 && (
              <span className="text-gray-500 ml-2">
                • Near {pg.nearby[0].name} ({pg.nearby[0].distance})
              </span>
            )}
          </p>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <Calendar className="h-4 w-4 flex-shrink-0 mr-2" />
          <p className="text-sm">Possession: {pg.possession || "Immediate"}</p>
        </div>

        {sharingTypes.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {sharingTypes.map((type) => (
              <div
                key={type}
                className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium text-gray-600 flex"
              >
                {type} Sharing
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Starting from</p>
            <p className="text-2xl font-bold text-emerald-600">
              ₹{minRentRoom.rent.toLocaleString()}
              <span className="text-gray-400 text-sm font-normal">/month</span>
            </p>
          </div>
          {pg._id && (
            <Link
              href={`/pg/${pg._id}`}
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-emerald-100"
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedPGs() {
  const [featuredPGs, setFeaturedPGs] = useState([]);
  const [allPgs, setAllPgs] = useState(samplePG);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(3);
  const [selectedType, setSelectedType] = useState({ value: "all", label: "All Types" });

  const pgTypeOptions = [
    { value: "all", label: "All Types" },
    { value: "male", label: "Male Only PGs" },
    { value: "female", label: "Female Only PGs" },
    { value: "unisex", label: "Unisex PGs" },
  ];

  const customSelectStyles = {
    control: (base) => ({
      ...base,
      minHeight: "44px",
      borderRadius: "0.5rem",
      borderColor: "#d1d5db",
      "&:hover": {
        borderColor: "#10b981",
      },
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected
        ? "#10b981"
        : isFocused
        ? "#ecfdf5"
        : undefined,
      color: isSelected ? "white" : "#374151",
    }),
  };

  useEffect(() => {
    const fetchFeaturedPGs = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setFeaturedPGs(samplePG);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchFeaturedPGs();
  }, []);

  useEffect(() => {
    if (selectedType?.value && allPgs?.length > 0) {
      if (selectedType?.value === "all") {
        setFeaturedPGs(allPgs);
        setDisplayCount(3)
        return;
      }
      const filteredPGs = allPgs.filter(
        (pg) => selectedType?.value?.toLowerCase() === pg.gender?.toLowerCase()
      );
      setFeaturedPGs(filteredPGs);
      setDisplayCount(3)
    }
  }, [selectedType]);

  const showMore = () => {
    setDisplayCount((prev) => Math.min(prev + 3, featuredPGs.length));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured PG Accommodations
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">
            Discover premium living spaces handpicked for you
          </p>
        </div>

        <div className="mb-8 max-w-xs mx-auto">
          <Select
            options={pgTypeOptions}
            value={selectedType}
            onChange={setSelectedType}
            styles={customSelectStyles}
            isSearchable={false}
            className="text-gray-700"
          />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gray-200 animate-pulse h-72 w-full"></div>
                <div className="p-6">
                  <div className="h-7 bg-gray-200 animate-pulse rounded-lg w-3/4 mb-4"></div>
                  <div className="h-5 bg-gray-200 animate-pulse rounded-lg w-1/2 mb-6"></div>
                  <div className="flex gap-3 mb-6">
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="h-8 bg-gray-200 animate-pulse rounded-full w-24"
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-10 bg-gray-200 animate-pulse rounded-lg w-1/3"></div>
                    <div className="h-10 bg-gray-200 animate-pulse rounded-full w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : featuredPGs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPGs.slice(0, displayCount).map((pg) => (
                <PGCard key={pg._id} pg={pg} />
              ))}
            </div>

            {displayCount < featuredPGs.length && (
              <motion.div
                className="flex justify-center mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={showMore}
                  className="group bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 flex items-center gap-2"
                >
                  Load More
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-2xl p-16 text-center shadow-lg">
            <p className="text-gray-600 text-xl mb-2">
              No featured PGs available at the moment.
            </p>
            <p className="text-gray-400">Check back soon for new listings!</p>
          </div>
        )}
      </div>
    </section>
  );
}
