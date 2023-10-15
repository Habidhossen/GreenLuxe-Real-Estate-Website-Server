const propertiesModel = require("../models/properties.model");

// create Properties
exports.createProperty = async (req, res) => {
  try {
    const data = req.body;
    const propertiesData = new propertiesModel(data);
    await propertiesData.save();
    res.status(201).json({
      status: "success",
      message: "Data inserted successfully",
      data: propertiesData,
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
exports.getAllProperties = async (req, res) => {
  try {
    const propertiesData = await propertiesModel.find();
    res.status(200).json({
      status: "success",
      data: propertiesData,
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
exports.getPropertyById = async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    const propertiesData = await propertiesModel.findById(propertyId);
    res.status(200).json({
      status: "success",
      data: propertiesData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
