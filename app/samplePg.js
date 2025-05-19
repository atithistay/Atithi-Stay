// Sample PG object with all necessary fields to test the components
const samplePG = [
  {
    _id: "65f234a1b5d78c6a8e9f1dc3",
    name: "Sunrise Comfort PG",
    address: "42, Lakshmi Nagar, 4th Cross",
    area: "Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560095",
    gender: "female", // Options: male, female, unisex
    min_rent: 9500, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        type: "image",
        caption: "Building Exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
        type: "image",
        caption: "Double Sharing Room",
      },
      {
        url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
        type: "image",
        caption: "Dining Area",
      },
      {
        url: "https://images.unsplash.com/photo-1585128903994-9788bf4645fb",
        type: "image",
        caption: "Common Room",
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
        type: "image",
        caption: "Bathroom",
      },
    ],
    videos: [
      {
        url: "https://example.com/videos/pg_tour.mp4",
        type: "video",
        caption: "PG Tour",
      },
    ],

    // Room Options
    rooms: [
      {
        type: "single",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 15000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "Spacious single room with AC, attached bathroom, study table, and wardrobe.",
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 9500,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room with AC, attached bathroom, balcony view, study tables, and wardrobes.",
      },
      {
        type: "triple",
        occupancy: 3,
        furnishing: "semi_furnished",
        rent: 7500,
        available: 3,
        ac: false,
        attached_bathroom: false,
        balcony: false,
        description:
          "Triple sharing room with common bathroom access, study space, and storage facilities.",
      },
    ],

    // Security Deposit
    deposit: {
      type: "months", // Options: fixed, months (as in months of rent)
      amount: 2, // Either fixed amount or number of months
      refundable: true,
    },

    // Amenities
    amenities: [
      {
        id: "wifi",
        name: "WiFi",
        available: true,
        details: "High-speed fiber connection",
      },
      {
        id: "power_backup",
        name: "Power Backup",
        available: true,
        details: "24/7 generator backup",
      },
      {
        id: "laundry",
        name: "Laundry Service",
        available: true,
        details: "Twice a week",
      },
      {
        id: "tv",
        name: "TV",
        available: true,
        details: "Common area",
      },
      {
        id: "fridge",
        name: "Refrigerator",
        available: true,
        details: "Common usage",
      },
      {
        id: "ac",
        name: "Air Conditioning",
        available: true,
        details: "Available in premium rooms",
      },
      {
        id: "water_purifier",
        name: "Water Purifier",
        available: true,
      },
      {
        id: "housekeeping",
        name: "Housekeeping",
        available: true,
        details: "Daily room cleaning",
      },
      {
        id: "gym",
        name: "Gym",
        available: false,
      },
      {
        id: "parking",
        name: "Parking",
        available: true,
        details: "Two-wheeler only",
      },
      {
        id: "security",
        name: "Security Guard",
        available: true,
        details: "24/7 security",
      },
      {
        id: "cctv",
        name: "CCTV Surveillance",
        available: true,
      },
    ],

    // Nearby Places
    nearby: [
      {
        name: "XYZ Tech Park",
        distance: "1.2 km",
        category: "work",
      },
      {
        name: "ABC College",
        distance: "800 m",
        category: "education",
      },
      {
        name: "City Hospital",
        distance: "1.5 km",
        category: "healthcare",
      },
      {
        name: "Metro Station",
        distance: "500 m",
        category: "transport",
      },
      {
        name: "Shopping Mall",
        distance: "900 m",
        category: "shopping",
      },
      {
        name: "Cafe Coffee Day",
        distance: "350 m",
        category: "food",
      },
      {
        name: "City Park",
        distance: "700 m",
        category: "recreation",
      },
    ],

    // Location
    location: {
      type: "Point",
      coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    },

    // Contact Information
    contact: {
      person: "Mrs. Sharma",
      phone: "+91 9876543210",
      email: "sunrise.pg@example.com",
      whatsapp: "+91 9876543210",
    },

    // Additional Information
    established: 2018,
    rating: 4.5,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1dc4",
    name: "Sunrise Comfort PG 2",
    address: "42, Lakshmi Nagar, 4th Cross",
    area: "Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560095",
    gender: "male", // Options: male, female, unisex
    min_rent: 8000, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        type: "image",
        caption: "Building Exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
        type: "image",
        caption: "Double Sharing Room",
      },
      {
        url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
        type: "image",
        caption: "Dining Area",
      },
      {
        url: "https://images.unsplash.com/photo-1585128903994-9788bf4645fb",
        type: "image",
        caption: "Common Room",
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
        type: "image",
        caption: "Bathroom",
      },
    ],
    videos: [
      {
        url: "https://example.com/videos/pg_tour.mp4",
        type: "video",
        caption: "PG Tour",
      },
    ],

    // Room Options
    rooms: [
      {
        type: "single",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 15000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "Spacious single room with AC, attached bathroom, study table, and wardrobe.",
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 9500,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room with AC, attached bathroom, balcony view, study tables, and wardrobes.",
      },
      {
        type: "triple",
        occupancy: 3,
        furnishing: "semi_furnished",
        rent: 8000,
        available: 3,
        ac: false,
        attached_bathroom: false,
        balcony: false,
        description:
          "Triple sharing room with common bathroom access, study space, and storage facilities.",
      },
    ],

    // Security Deposit
    deposit: {
      type: "months", // Options: fixed, months (as in months of rent)
      amount: 2, // Either fixed amount or number of months
      refundable: true,
    },

    // Amenities
    amenities: [
      {
        id: "wifi",
        name: "WiFi",
        available: true,
        details: "High-speed fiber connection",
      },
      {
        id: "power_backup",
        name: "Power Backup",
        available: true,
        details: "24/7 generator backup",
      },
      {
        id: "laundry",
        name: "Laundry Service",
        available: true,
        details: "Twice a week",
      },
      {
        id: "tv",
        name: "TV",
        available: true,
        details: "Common area",
      },
      {
        id: "fridge",
        name: "Refrigerator",
        available: true,
        details: "Common usage",
      },
      {
        id: "ac",
        name: "Air Conditioning",
        available: true,
        details: "Available in premium rooms",
      },
      {
        id: "water_purifier",
        name: "Water Purifier",
        available: true,
      },
      {
        id: "housekeeping",
        name: "Housekeeping",
        available: true,
        details: "Daily room cleaning",
      },
      {
        id: "gym",
        name: "Gym",
        available: false,
      },
      {
        id: "parking",
        name: "Parking",
        available: true,
        details: "Two-wheeler only",
      },
      {
        id: "security",
        name: "Security Guard",
        available: true,
        details: "24/7 security",
      },
      {
        id: "cctv",
        name: "CCTV Surveillance",
        available: true,
      },
    ],

    // Nearby Places
    nearby: [
      {
        name: "XYZ Tech Park",
        distance: "1.2 km",
        category: "work",
      },
      {
        name: "ABC College",
        distance: "800 m",
        category: "education",
      },
      {
        name: "City Hospital",
        distance: "1.5 km",
        category: "healthcare",
      },
      {
        name: "Metro Station",
        distance: "500 m",
        category: "transport",
      },
      {
        name: "Shopping Mall",
        distance: "900 m",
        category: "shopping",
      },
      {
        name: "Cafe Coffee Day",
        distance: "350 m",
        category: "food",
      },
      {
        name: "City Park",
        distance: "700 m",
        category: "recreation",
      },
    ],

    // Location
    location: {
      type: "Point",
      coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    },

    // Contact Information
    contact: {
      person: "Mrs. Sharma",
      phone: "+91 9876543210",
      email: "sunrise.pg@example.com",
      whatsapp: "+91 9876543210",
    },

    // Additional Information
    established: 2018,
    rating: 4.5,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1dc5",
    name: "Sunrise Comfort PG 3",
    address: "42, Lakshmi Nagar, 4th Cross",
    area: "Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560095",
    gender: "female", // Options: male, female, unisex
    min_rent: 10000, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        type: "image",
        caption: "Building Exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
        type: "image",
        caption: "Double Sharing Room",
      },
      {
        url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
        type: "image",
        caption: "Dining Area",
      },
      {
        url: "https://images.unsplash.com/photo-1585128903994-9788bf4645fb",
        type: "image",
        caption: "Common Room",
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
        type: "image",
        caption: "Bathroom",
      },
    ],
    videos: [
      {
        url: "https://example.com/videos/pg_tour.mp4",
        type: "video",
        caption: "PG Tour",
      },
    ],

    // Room Options
    rooms: [
      {
        type: "single",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 15000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "Spacious single room with AC, attached bathroom, study table, and wardrobe.",
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 11500,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room with AC, attached bathroom, balcony view, study tables, and wardrobes.",
      },
      {
        type: "triple",
        occupancy: 3,
        furnishing: "semi_furnished",
        rent: 10000,
        available: 3,
        ac: false,
        attached_bathroom: false,
        balcony: false,
        description:
          "Triple sharing room with common bathroom access, study space, and storage facilities.",
      },
    ],

    // Security Deposit
    deposit: {
      type: "months", // Options: fixed, months (as in months of rent)
      amount: 1, // Either fixed amount or number of months
      refundable: true,
    },

    // Amenities
    amenities: [
      {
        id: "wifi",
        name: "WiFi",
        available: true,
        details: "High-speed fiber connection",
      },
      {
        id: "power_backup",
        name: "Power Backup",
        available: true,
        details: "24/7 generator backup",
      },
      {
        id: "laundry",
        name: "Laundry Service",
        available: true,
        details: "Twice a week",
      },
      {
        id: "tv",
        name: "TV",
        available: true,
        details: "Common area",
      },
      {
        id: "fridge",
        name: "Refrigerator",
        available: true,
        details: "Common usage",
      },
      {
        id: "ac",
        name: "Air Conditioning",
        available: true,
        details: "Available in premium rooms",
      },
      {
        id: "water_purifier",
        name: "Water Purifier",
        available: true,
      },
      {
        id: "housekeeping",
        name: "Housekeeping",
        available: true,
        details: "Daily room cleaning",
      },
      {
        id: "gym",
        name: "Gym",
        available: false,
      },
      {
        id: "parking",
        name: "Parking",
        available: true,
        details: "Two-wheeler only",
      },
      {
        id: "security",
        name: "Security Guard",
        available: true,
        details: "24/7 security",
      },
      {
        id: "cctv",
        name: "CCTV Surveillance",
        available: true,
      },
    ],

    // Nearby Places
    nearby: [
      {
        name: "XYZ Tech Park",
        distance: "1.2 km",
        category: "work",
      },
      {
        name: "ABC College",
        distance: "800 m",
        category: "education",
      },
      {
        name: "City Hospital",
        distance: "1.5 km",
        category: "healthcare",
      },
      {
        name: "Metro Station",
        distance: "500 m",
        category: "transport",
      },
      {
        name: "Shopping Mall",
        distance: "900 m",
        category: "shopping",
      },
      {
        name: "Cafe Coffee Day",
        distance: "350 m",
        category: "food",
      },
      {
        name: "City Park",
        distance: "700 m",
        category: "recreation",
      },
    ],

    // Location
    location: {
      type: "Point",
      coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    },

    // Contact Information
    contact: {
      person: "Mrs. Sharma",
      phone: "+91 9876543210",
      email: "sunrise.pg@example.com",
      whatsapp: "+91 9876543210",
    },

    // Additional Information
    established: 2018,
    rating: 4.5,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1dc6",
    name: "Sunrise Comfort PG 4",
    address: "42, Lakshmi Nagar, 4th Cross",
    area: "Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560095",
    gender: "female", // Options: male, female, unisex
    min_rent: 9500, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        type: "image",
        caption: "Building Exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
        type: "image",
        caption: "Double Sharing Room",
      },
      {
        url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
        type: "image",
        caption: "Dining Area",
      },
      {
        url: "https://images.unsplash.com/photo-1585128903994-9788bf4645fb",
        type: "image",
        caption: "Common Room",
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
        type: "image",
        caption: "Bathroom",
      },
    ],
    videos: [
      {
        url: "https://example.com/videos/pg_tour.mp4",
        type: "video",
        caption: "PG Tour",
      },
    ],

    // Room Options
    rooms: [
      {
        type: "single",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 15000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "Spacious single room with AC, attached bathroom, study table, and wardrobe.",
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 9500,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room with AC, attached bathroom, balcony view, study tables, and wardrobes.",
      },
      {
        type: "triple",
        occupancy: 3,
        furnishing: "semi_furnished",
        rent: 7500,
        available: 3,
        ac: false,
        attached_bathroom: false,
        balcony: false,
        description:
          "Triple sharing room with common bathroom access, study space, and storage facilities.",
      },
    ],

    // Security Deposit
    deposit: {
      type: "months", // Options: fixed, months (as in months of rent)
      amount: 2, // Either fixed amount or number of months
      refundable: true,
    },

    // Amenities
    amenities: [
      {
        id: "wifi",
        name: "WiFi",
        available: true,
        details: "High-speed fiber connection",
      },
      {
        id: "power_backup",
        name: "Power Backup",
        available: true,
        details: "24/7 generator backup",
      },
      {
        id: "laundry",
        name: "Laundry Service",
        available: true,
        details: "Twice a week",
      },
      {
        id: "tv",
        name: "TV",
        available: true,
        details: "Common area",
      },
      {
        id: "fridge",
        name: "Refrigerator",
        available: true,
        details: "Common usage",
      },
      {
        id: "ac",
        name: "Air Conditioning",
        available: true,
        details: "Available in premium rooms",
      },
      {
        id: "water_purifier",
        name: "Water Purifier",
        available: true,
      },
      {
        id: "housekeeping",
        name: "Housekeeping",
        available: true,
        details: "Daily room cleaning",
      },
      {
        id: "gym",
        name: "Gym",
        available: false,
      },
      {
        id: "parking",
        name: "Parking",
        available: true,
        details: "Two-wheeler only",
      },
      {
        id: "security",
        name: "Security Guard",
        available: true,
        details: "24/7 security",
      },
      {
        id: "cctv",
        name: "CCTV Surveillance",
        available: true,
      },
    ],

    // Nearby Places
    nearby: [
      {
        name: "XYZ Tech Park",
        distance: "1.2 km",
        category: "work",
      },
      {
        name: "ABC College",
        distance: "800 m",
        category: "education",
      },
      {
        name: "City Hospital",
        distance: "1.5 km",
        category: "healthcare",
      },
      {
        name: "Metro Station",
        distance: "500 m",
        category: "transport",
      },
      {
        name: "Shopping Mall",
        distance: "900 m",
        category: "shopping",
      },
      {
        name: "Cafe Coffee Day",
        distance: "350 m",
        category: "food",
      },
      {
        name: "City Park",
        distance: "700 m",
        category: "recreation",
      },
    ],

    // Location
    location: {
      type: "Point",
      coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    },

    // Contact Information
    contact: {
      person: "Mrs. Sharma",
      phone: "+91 9876543210",
      email: "sunrise.pg@example.com",
      whatsapp: "+91 9876543210",
    },

    // Additional Information
    established: 2018,
    rating: 4.5,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1dc7",
    name: "Sunrise Comfort PG 5",
    address: "42, Lakshmi Nagar, 4th Cross",
    area: "Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560095",
    gender: "female", // Options: male, female, unisex
    min_rent: 9500, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
        type: "image",
        caption: "Building Exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
        type: "image",
        caption: "Double Sharing Room",
      },
      {
        url: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8",
        type: "image",
        caption: "Dining Area",
      },
      {
        url: "https://images.unsplash.com/photo-1585128903994-9788bf4645fb",
        type: "image",
        caption: "Common Room",
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
        type: "image",
        caption: "Bathroom",
      },
    ],
    videos: [
      {
        url: "https://example.com/videos/pg_tour.mp4",
        type: "video",
        caption: "PG Tour",
      },
    ],

    // Room Options
    rooms: [
      {
        type: "single",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 15000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "Spacious single room with AC, attached bathroom, study table, and wardrobe.",
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 9500,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room with AC, attached bathroom, balcony view, study tables, and wardrobes.",
      },
      {
        type: "triple",
        occupancy: 3,
        furnishing: "semi_furnished",
        rent: 7500,
        available: 3,
        ac: false,
        attached_bathroom: false,
        balcony: false,
        description:
          "Triple sharing room with common bathroom access, study space, and storage facilities.",
      },
    ],

    // Security Deposit
    deposit: {
      type: "months", // Options: fixed, months (as in months of rent)
      amount: 2, // Either fixed amount or number of months
      refundable: true,
    },

    // Amenities
    amenities: [
      {
        id: "wifi",
        name: "WiFi",
        available: true,
        details: "High-speed fiber connection",
      },
      {
        id: "power_backup",
        name: "Power Backup",
        available: true,
        details: "24/7 generator backup",
      },
      {
        id: "laundry",
        name: "Laundry Service",
        available: true,
        details: "Twice a week",
      },
      {
        id: "tv",
        name: "TV",
        available: true,
        details: "Common area",
      },
      {
        id: "fridge",
        name: "Refrigerator",
        available: true,
        details: "Common usage",
      },
      {
        id: "ac",
        name: "Air Conditioning",
        available: true,
        details: "Available in premium rooms",
      },
      {
        id: "water_purifier",
        name: "Water Purifier",
        available: true,
      },
      {
        id: "housekeeping",
        name: "Housekeeping",
        available: true,
        details: "Daily room cleaning",
      },
      {
        id: "gym",
        name: "Gym",
        available: false,
      },
      {
        id: "parking",
        name: "Parking",
        available: true,
        details: "Two-wheeler only",
      },
      {
        id: "security",
        name: "Security Guard",
        available: true,
        details: "24/7 security",
      },
      {
        id: "cctv",
        name: "CCTV Surveillance",
        available: true,
      },
    ],

    // Nearby Places
    nearby: [
      {
        name: "XYZ Tech Park",
        distance: "1.2 km",
        category: "work",
      },
      {
        name: "ABC College",
        distance: "800 m",
        category: "education",
      },
      {
        name: "City Hospital",
        distance: "1.5 km",
        category: "healthcare",
      },
      {
        name: "Metro Station",
        distance: "500 m",
        category: "transport",
      },
      {
        name: "Shopping Mall",
        distance: "900 m",
        category: "shopping",
      },
      {
        name: "Cafe Coffee Day",
        distance: "350 m",
        category: "food",
      },
      {
        name: "City Park",
        distance: "700 m",
        category: "recreation",
      },
    ],

    // Location
    location: {
      type: "Point",
      coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    },

    // Contact Information
    contact: {
      person: "Mrs. Sharma",
      phone: "+91 9876543210",
      email: "sunrise.pg@example.com",
      whatsapp: "+91 9876543210",
    },

    // Additional Information
    established: 2018,
    rating: 4.5,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
];

export default samplePG;
