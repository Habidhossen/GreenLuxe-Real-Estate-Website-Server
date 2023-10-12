const express = require("express");
const {
  createProperty,
  getPropertyById,
} = require("../controllers/properties.controller");
const router = express.Router();

// Property Routes
router.post("/properties", createProperty);
router.get("/properties/:propertyId", getPropertyById);
router.get("/properties", getAllProperties);

module.exports = router;
