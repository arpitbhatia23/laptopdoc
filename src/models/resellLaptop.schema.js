import mongoose from "mongoose";

const resaleLaptopSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    brand: {
      type: String,
      required: true,
      enum: [
        "Dell",
        "HP",
        "Lenovo",
        "ASUS",
        "Acer",
        "MSI",
        "Apple",
        "Samsung",
        "Other",
      ],
    },

    category: {
      type: String,
      enum: ["Laptop", "Desktop", "Mini PC", "All-in-One"],
      default: "Laptop",
    },

    processor: {
      type: String,
      required: true,
    },

    ram: {
      type: String,
      required: true,
    },

    storage: {
      type: String,
      required: true,
    },

    graphics: {
      type: String,
      default: "Integrated",
    },

    display: {
      type: String,
    },

    operatingSystem: {
      type: String,
      default: "Windows 11",
    },

    batteryHealth: {
      type: String,
    },

    condition: {
      type: String,
      enum: ["Excellent", "Good", "Average", "Fair"],
      default: "Good",
    },

    warranty: {
      type: String,
      default: "No Warranty",
    },

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
    },

    images: [
      {
        url: {
          type: String,
          required: true,
        },
        public_id: {
          type: String,
          required: true,
        },
      },
    ],

    description: {
      type: String,
    },

    features: [
      {
        type: String,
      },
    ],

    available: {
      type: Boolean,
      default: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    whatsappNumber: {
      type: String,
    },

    location: {
      type: String,
      default: "Chandigarh",
    },

    views: {
      type: Number,
      default: 0,
    },

    seoTitle: String,

    seoDescription: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.ResaleLaptop ||
  mongoose.model("ResaleLaptop", resaleLaptopSchema);
