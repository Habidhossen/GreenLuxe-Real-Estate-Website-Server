const mongoose = require("mongoose");

// Define the Property Schema
const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ["house", "apartment", "commercial"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      address: String,
      city: String,
      state: String,
      zipCode: String,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    squareFootage: Number,
    amenities: [String], // An array of amenities (e.g., pool, garage, garden)
    images: [String], // An array of image URLs
    listingDate: {
      type: Date,
      default: Date.now,
    },
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Property model
module.exports = mongoose.model("Property", propertySchema);
