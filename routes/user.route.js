const express = require("express");
const {
  createUser,
  getAllUser,
  getUserById,
} = require("../controllers/user.controller");

const router = express.Router();

// Property Routes
router.post("/user", createUser);
router.get("/user", getAllUser);
router.get("/user/:userId", getUserById);

module.exports = router;
