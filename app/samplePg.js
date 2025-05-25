// Sample PG object with all necessary fields to test the components
const samplePG = [
  {
    _id: "65f234a1b5d78c6a8e9f1de6",
    name: "Emerald Isle",
    address: "Near Powai Lake, Saki vihar road",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "male", // Options: male, female, unisex
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197378/EmeraldIsle-05_duxao9.jpg",
        type: "image",
        caption: "Master bedroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197372/EmeraldIsle-03_lm3bom.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197375/EmeraldIsle-04_l8n69n.jpg",
        type: "image",
        caption: "Outside View",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197366/EmeraldIsle-01_zwwmyx.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197369/EmeraldIsle-02_y8ob6j.jpg",
        type: "image",
        caption: "Bathroom",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "master",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 45000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A full master bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 60000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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

    possession: "1st July",
    // Nearby Places
    nearby: [
      {
        name: "Hiranandani Gardens",
        distance: "2 Km",
        category: "Garden",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
    },

    // Additional Information
    established: 2018,
    rating: 4.7,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1dc3",
    name: "Trinty Building",
    address: "Near Hiranandani Gardens ",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076", // 400072
    gender: "unisex", // Options: male, female, unisex
    min_rent: 9500, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023768/Trinty-05_nugyz7.jpg",
        type: "image",
        caption: "PG Room",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023764/Trinty-01_otkdgp.jpg",
        type: "image",
        caption: "Double Sharing Room",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023779/Trinty-02_hyjhpg.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023746/Trinty-09_qfm9cs.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023760/Trinty-06_flnzbe.jpg",
        type: "image",
        caption: "Bathroom",
      },
    ],
    // Room Options
    rooms: [
      {
        type: "single",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 34000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "Spacious single room with AC, attached bathroom",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 39000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 17000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room with AC, attached bathroom, balcony view",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 22000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "triple",
        occupancy: 3,
        furnishing: "fully_furnished",
        rent: 16000,
        available: 2,
        ac: true,
        attached_bathroom: false,
        balcony: false,
        description:
          "Triple sharing room with common bathroom access, study space, and storage facilities.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 21000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "quad",
        occupancy: 3,
        furnishing: "fully_furnished",
        rent: 11000,
        available: 2,
        ac: true,
        attached_bathroom: false,
        balcony: false,
        description:
          "Four sharing room with common bathroom access, study space, and storage facilities.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 16000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],
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
        name: "Hiranandani Gardens",
        distance: "0.5 km",
        category: "Garden",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
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
    name: "Jupiter Building",
    address: "Ghandhi nagar singlel suncity complex",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "female", // Options: male, female, unisex
    min_rent: 8000, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023573/Jupiter-05_qlbz3d.jpg",
        type: "image",
        caption: "Double Sharing room",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023582/Jupiter-01_th4vy2.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023576/Jupiter-04_mlhkv1.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023570/Jupiter-06_sscca6.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023562/Jupiter-07_tcxlod.jpg",
        type: "image",
        caption: "Lift",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "master",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 35000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A master bedroom with AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 40000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "common",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 32000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A common bedroom with AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 37000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 18000,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room with AC, attached bathroom, balcony view, study tables, and wardrobes.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 23000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "triple",
        occupancy: 3,
        furnishing: "fully_furnished",
        rent: 12000,
        available: 3,
        ac: false,
        attached_bathroom: false,
        balcony: false,
        description:
          "Triple sharing room with common bathroom access, study space, and storage facilities.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 17000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "hall",
        occupancy: 3,
        furnishing: "fully_furnished",
        rent: 11000,
        available: 3,
        ac: false,
        attached_bathroom: false,
        balcony: false,
        description:
          "A hall with common bathroom access, study space, and storage facilities.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 16000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "Kanjurmarg station",
        distance: "0.5 km",
        category: "station",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
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
    name: "Parijat Tower",
    address: "Saki Vihar Road Powai",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "male", // Options: male, female, unisex
    min_rent: 8000, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023456/Parijat-09_lpopcl.jpg",
        type: "image",
        caption: "Double Sharing room",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023453/Parijat-11_eyrtep.jpg",
        type: "image",
        caption: "Single Sharing room",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023496/Parijat-02_stxteo.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023482/Parijat-06_gjniam.jpg",
        type: "image",
        caption: "Bathroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023462/Parijat-08_kdijfb.jpg",
        type: "image",
        caption: "",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "single",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 30000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A master bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 35000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "single",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 28000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "A master bedroom without bed, with AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 33000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 15000,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room with bed, AC, attached bathroom, balcony view, study tables, and wardrobes.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 20000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 14000,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room without bed with AC, attached bathroom, balcony view, study tables, and wardrobes.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 19000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "Sakivihar road, Sakinaka metro station",
        distance: "1 km",
        category: "Metro station",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
    },

    // Additional Information
    established: 2018,
    rating: 4.3,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1dc6",
    name: "Panch shirshti Complex",
    address: "Near Sm shetty school ",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "female", // Options: male, female, unisex
    min_rent: 8000, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023346/Panchshirshti-12_xhpizm.jpg",
        type: "image",
        caption: "Double Sharing room",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023351/Panchshirshti-10_sktscf.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023348/Panchshirshti-11_fm6wys.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023367/Panchshirshti-04_e2x7aj.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023354/Panchshirshti-09_qtd49a.jpg",
        type: "image",
        caption: "Bathroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023374/Panchshirshti-01_glgelt.jpg",
        type: "image",
        caption: "Bathroom",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "master",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 35000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A master bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 40000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "single",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 32000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "A single sharing bedroom without bed, with AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 37000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 18000,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "A double sharing room with bed, AC, attached bathroom, balcony view, study tables, and wardrobes.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 23000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "double",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 16000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "A double sharing room without bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 21000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "triple",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 12000,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Triple sharing room with bed, AC, attached bathroom, balcony view, study tables, and wardrobes.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 17000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "hall",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 12000,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Triple sharing room with bed, AC, attached bathroom, balcony view, study tables, and wardrobes.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 17000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "Hiranandani D-mart",
        distance: "0.5 km",
        category: "D-mart",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
    },

    // Additional Information
    established: 2018,
    rating: 4.3,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1dc7",
    name: "Evershine Sapphire",
    address: "Chandivali",
    area: "Chandivali",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400072",
    gender: "female", // Options: male, female, unisex
    min_rent: 8000, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023288/Evershinesapphire-03_ybep9k.jpg",
        type: "image",
        caption: "Master bedroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023293/Evershinesapphire-01_zjsw5n.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023291/Evershinesapphire-02_d1vpoe.jpg",
        type: "image",
        caption: "",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "master",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 35000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A master bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 45000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "Lake Homes Complex",
        distance: "100 m",
        category: "D-mart",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
    },

    // Additional Information
    established: 2018,
    rating: 4.7,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1dc8",
    name: "Jheel Dharshan",
    address: "Near Hiranandani Gardens",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "unisex", // Options: male, female, unisex
    min_rent: 8000, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748022982/Jheeldharshan-08_clqtql.jpg",
        type: "image",
        caption: "Master bedroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748023006/Jheeldharshan-01_zrmx0n.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748022987/Jheeldharshan-07_h8pfcq.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748022993/Jheeldharshan-06_xzu5u7.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748022966/Jheeldharshan-09_n0pe0h.jpg",
        type: "image",
        caption: "",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "master",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 36000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A master bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 41000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "common",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 34000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "A common bedroom without bed, with AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 39000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 19000,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room with bed, AC, attached bathroom, balcony view, study tables, and wardrobes.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 24000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 17500,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Double sharing room without bed, AC, attached bathroom, balcony view, study tables, and wardrobes.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 22500, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "powai police station",
        distance: "200 m",
        category: "police station",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
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
    _id: "65f234a1b5d78c6a8e9f1dc9",
    name: "Raheja nest building",
    address: "Near Hiranandani Gardens",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "unisex", // Options: male, female, unisex
    min_rent: 8000, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748185120/Rahejanesbuilding-03_pbq7by.jpg",
        type: "image",
        caption: "Common bedroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748185119/Rahejanesbuilding-02_c685bl.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748185118/Rahejanesbuilding-01_kb3c6m.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748185122/Rahejanesbuilding-04_zkr4gy.jpg",
        type: "image",
        caption: "bathroom",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "common",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 30000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A common bedroom with bed, with AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 50000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "powai police station",
        distance: "200 m",
        category: "police station",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
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
    _id: "65f234a1b5d78c6a8e9f1d1",
    name: "Kanakia Sevens",
    address: "Marol Andheri East ",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "female", // Options: male, female, unisex
    min_rent: 8000, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197162/KanakiaSevens-03_i3wzvi.jpg",
        type: "image",
        caption: "Common bedroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197164/KanakiaSevens-04_aveqcs.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197161/KanakiaSevens-02_mhg7rp.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197160/KanakiaSevens-01_b82h8g.jpg",
        type: "image",
        caption: "bathroom",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "double",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 16000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "A double sharing bedroom with bed, with AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 25000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "Near Marol metro station",
        distance: "750 m",
        category: "metro station",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
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
    _id: "65f234a1b5d78c6a8e9f1de1",
    name: "Panch shirshti Complex",
    address: "Near Hiranandani Gardens",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "unisex", // Options: male, female, unisex
    min_rent: 8000, // Minimum rent among all room types
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197208/PanchShirshtiComplex-05_nvnhgl.jpg",
        type: "image",
        caption: "Master bedroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197210/PanchShirshtiComplex-06_tglsjz.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197200/PanchShirshtiComplex-04_uv34gw.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197195/PanchShirshtiComplex-02_mhja0p.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197191/PanchShirshtiComplex-01_bnsdsq.jpg",
        type: "image",
        caption: "Hall",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "master",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 35000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A master bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 50000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "common",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 32000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "A full common bedroom without bed, with AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 40000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "master_double",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 18000,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "A double sharing room with bed, AC, attached bathroom, balcony view, study tables, and wardrobes.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 25000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "common_double",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 16500,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "A double sharing room without bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 20000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "hall",
        occupancy: 2,
        furnishing: "fully_furnished",
        rent: 12000,
        available: 4,
        ac: true,
        attached_bathroom: true,
        balcony: true,
        description:
          "Triple sharing room with bed, AC, attached bathroom, balcony view, study tables, and wardrobes.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 16000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "Hiranandani D-mart",
        distance: "0.5 km",
        category: "D-mart",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
    },

    // Additional Information
    established: 2018,
    rating: 4.3,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1de2",
    name: "Godrej urban Park",
    address: "Chandivali",
    area: "Chandivali",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400072",
    gender: "male", // Options: male, female, unisex
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197234/GodrejurbanPark-01_je4tdp.jpg",
        type: "image",
        caption: "Master bedroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197238/GodrejurbanPark-03_wqj6tl.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197247/GodrejurbanPark-07_ga4yrz.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197236/GodrejurbanPark-02_a7l6qs.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197245/GodrejurbanPark-06_ime9mw.jpg",
        type: "image",
        caption: "Bathroom",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "master",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 35000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A master bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 50000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "Opp Nahar Amrit Shakti Complex ",
        distance: "100 m",
        category: "Complex",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
    },

    // Additional Information
    established: 2018,
    rating: 4.3,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1de3",
    name: "Kailash Tower Panch Shirshti Complex",
    address: "Powai",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "unisex", // Options: male, female, unisex
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197269/TowerPanchShirshtiComplex-01_mpz9nn.jpg",
        type: "image",
        caption: "Master bedroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197272/TowerPanchShirshtiComplex-02_mh1pch.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197274/TowerPanchShirshtiComplex-03_hn7mel.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197282/TowerPanchShirshtiComplex-07_jvhtvc.jpg",
        type: "image",
        caption: "Hall",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197276/TowerPanchShirshtiComplex-04_hs6yfi.jpg",
        type: "image",
        caption: "Bathroom",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "master",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 32000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A master bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 40000, // Either fixed amount or number of months
          refundable: true,
        },
      },
      {
        type: "master_double",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 17000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "A double shsring master bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 25000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "Near Hiranandani Gardens",
        distance: "500 m",
        category: "Garden",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
    },

    // Additional Information
    established: 2018,
    rating: 4.3,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1de4",
    name: "Orchid Enclave, Nahar Amrit Shakti Complex",
    address: "Powai",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "female", // Options: male, female, unisex
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197305/Orchid_Enclave-02_p1el7a.jpg",
        type: "image",
        caption: "Master bedroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197308/Orchid_Enclave-03_qfq5tm.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197311/Orchid_Enclave-05_ogh5hj.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197303/OrchidEnclave-01_t8nz2i.jpg",
        type: "image",
        caption: "Bathroom",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "master",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 32000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description: "A master bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 50000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "D mart Nahar",
        distance: "200 m",
        category: "Garden",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
    },

    // Additional Information
    established: 2018,
    rating: 4.3,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
  {
    _id: "65f234a1b5d78c6a8e9f1de5",
    name: "Sai sapphire Building",
    address: "Powai vihar Complex",
    area: "Powai",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400076",
    gender: "male", // Options: male, female, unisex
    featured: true,
    verified: true,

    // Images and Videos
    images: [
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197341/SaisapphireBuilding-02_c09j3m.jpg",
        type: "image",
        caption: "Master bedroom",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197338/SaisapphireBuilding-01_pynxa2.jpg",
        type: "image",
        caption: "",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197348/SaisapphireBuilding-05_w9khbq.jpg",
        type: "image",
        caption: "Kitchen",
      },
      {
        url: "https://res.cloudinary.com/dh5vm4l2r/image/upload/v1748197345/SaisapphireBuilding-04_dtjga7.jpg",
        type: "image",
        caption: "Bathroom",
      },
    ],
    // videos: [
    //   {
    //     url: "https://example.com/videos/pg_tour.mp4",
    //     type: "video",
    //     caption: "PG Tour",
    //   },
    // ],

    // Room Options
    rooms: [
      {
        type: "double",
        occupancy: 1,
        furnishing: "fully_furnished",
        rent: 18000,
        available: 2,
        ac: true,
        attached_bathroom: true,
        balcony: false,
        description:
          "A double sharing bedroom with bed, AC, attached bathroom.",
        deposit: {
          type: "fixed", // Options: fixed, months (as in months of rent)
          amount: 25000, // Either fixed amount or number of months
          refundable: true,
        },
      },
    ],

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
        name: "Gopal Sharma School",
        distance: "50 m",
        category: "School",
      },
    ],

    // Location
    // location: {
    //   type: "Point",
    //   coordinates: [77.6326, 12.9279], // [longitude, latitude] as per MongoDB GeoJSON
    // },

    // Contact Information
    contact: {
      person: "Mr. Aman",
      phone: "+91 9819507063",
      email: "atithistaymumbai@gmail.com",
      whatsapp: "+91 9819507063",
    },

    // Additional Information
    established: 2018,
    rating: 4.3,
    total_reviews: 32,

    // Timestamps
    createdAt: "2025-03-15T10:30:00.000Z",
    updatedAt: "2025-04-22T14:45:30.000Z",
  },
];

export default samplePG;
