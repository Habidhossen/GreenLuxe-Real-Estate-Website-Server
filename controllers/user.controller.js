const userModel = require("../models/user.model");

// create Properties
exports.createUser = async (req, res) => {
  try {
    const data = req.body;

    // Check if a user with the same email already exists
    const existingUser = await userModel.findOne({ email: data.email });

    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "Email already exists",
      });
    }

    // If no existing user found, proceed to save the new user
    const userData = new userModel(data);
    await userData.save();

    res.status(201).json({
      status: "success",
      message: "Data inserted successfully",
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};

// Get all Properties
exports.getAllUser = async (req, res) => {
  try {
    const userData = await userModel.find();
    res.status(200).json({
      status: "success",
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// Get One Properties
exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = await userModel.findById(userId);
    res.status(200).json({
      status: "success",
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// get admin
exports.getAdmin = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await userModel.findOne({ email: email });
    const isAdmin = user?.role === "admin";
    res.status(200).json({
      status: "success",
      admin: isAdmin,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
