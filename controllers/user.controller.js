const userModel = require("../models/user.model");

// create Properties
exports.createUser = async (req, res) => {
  try {
    const data = req.body;
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
