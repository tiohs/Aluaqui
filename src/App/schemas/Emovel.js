import mongoose from 'mongoose';

const emovelSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    descrition: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Emovel', emovelSchema);
