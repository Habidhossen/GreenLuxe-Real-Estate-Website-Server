const mongoose = require("mongoose");

// Define the Property Schema
const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    propertyType: {
      type: String,
      required: true,
    },
    status: {
      type: String,
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
    bedrooms: Number,
    bathrooms: Number,
    garages: Number,
    squareFootage: {
      type: Number,
      required: true,
    },
    amenities: [String],
    images: [String],
    listingDate: {
      type: Date,
      required: true,
    },
    agent: {
      name: String,
      email: String,
      phone: String,
    },
    views: Number,
    statusHistory: [
      {
        status: String,
        date: Date,
      },
    ],
    rating: Number,
    reviews: [
      {
        user: {
          name: String,
          email: String,
        },
        rating: Number,
        comment: String,
        date: Date,
      },
    ],
    tags: [String],
  },
  {
    timestamps: true,
  }
);

// Create and export the Property model
module.exports = mongoose.model("Property", propertySchema);
