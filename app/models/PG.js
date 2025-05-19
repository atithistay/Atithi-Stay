// models/PG.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  type: { type: String, default: 'image' },
  caption: { type: String }
});

const roomSchema = new mongoose.Schema({
  type: { 
    type: String, 
    required: true,
    enum: ['single', 'double', 'triple', 'quad']
  },
  occupancy: { 
    type: Number, 
    required: true,
    min: 1
  },
  furnishing: { 
    type: String, 
    required: true,
    enum: ['fully_furnished', 'semi_furnished', 'unfurnished']
  },
  rent: { 
    type: Number, 
    required: true,
    min: 0
  },
  available: { 
    type: Number, 
    required: true,
    min: 0
  },
  ac: { type: Boolean, default: false },
  attached_bathroom: { type: Boolean, default: false },
  balcony: { type: Boolean, default: false },
  description: { type: String }
});

const depositSchema = new mongoose.Schema({
  type: { 
    type: String, 
    required: true,
    enum: ['fixed', 'months']
  },
  amount: { type: Number, required: true },
  refundable: { type: Boolean, default: true }
});

const amenitySchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  available: { type: Boolean, default: false },
  details: { type: String }
});

const nearbyPlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  distance: { type: String, required: true },
  category: { 
    type: String,
    enum: ['work', 'education', 'healthcare', 'transport', 'shopping', 'food', 'recreation', 'other'],
    default: 'other'
  }
});

const contactSchema = new mongoose.Schema({
  person: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  whatsapp: { type: String }
});

const PGSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  address: { 
    type: String, 
    required: true,
    trim: true
  },
  area: { 
    type: String, 
    required: true,
    trim: true
  },
  city: { 
    type: String, 
    required: true,
    trim: true
  },
  state: { 
    type: String, 
    required: true,
    trim: true
  },
  pincode: { 
    type: String,
    required: true,
    trim: true
  },
  gender: { 
    type: String, 
    required: true,
    enum: ['male', 'female', 'unisex']
  },
  min_rent: { 
    type: Number, 
    required: true,
    min: 0
  },
  featured: { 
    type: Boolean,
    default: false
  },
  verified: { 
    type: Boolean,
    default: false
  },
  
  // Images and Videos
  images: [imageSchema],
  videos: [imageSchema],
  
  // Room Options
  rooms: [roomSchema],
  
  // Security Deposit
  deposit: {
    type: depositSchema,
    required: true
  },
  
  // Amenities
  amenities: [amenitySchema],

  // Nearby Places
  nearby: [nearbyPlaceSchema],
  
  // Location
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  
  // Contact Information
  contact: {
    type: contactSchema,
    required: true
  },
  
  // Additional Information
  established: { type: Number },
  rating: { 
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  total_reviews: { 
    type: Number,
    min: 0,
    default: 0
  }
}, { timestamps: true });

// Create geospatial index for location field
PGSchema.index({ location: '2dsphere' });

module.exports = mongoose.models.PG || mongoose.model('PG', PGSchema);