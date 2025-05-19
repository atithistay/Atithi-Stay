import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  pg_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PG', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, required: true },
  approved: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema);

export default Review;