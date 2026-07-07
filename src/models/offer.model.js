import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    discountText: { type: String },
    image: { type: String },
    link: { type: String, default: "/contact" },
    active: { type: Boolean, default: true },
    startDate: { type: Date },
    endDate: { type: Date },
    priority: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.models.Offer || mongoose.model("Offer", offerSchema);
