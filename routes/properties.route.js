const express = require("express");
const {
  createProperty,
  getPropertyById,
  getAllProperties,
} = require("../controllers/properties.controller");
const router = express.Router();

// Property Routes
router.post("/properties", createProperty);
router.get("/properties", getAllProperties);
router.get("/properties/:propertyId", getPropertyById);

module.exports = router;
