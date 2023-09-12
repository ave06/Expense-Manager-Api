const db = require("../../database");
const userModel = require("../../models/users");

exports.getUsers = (req, res, next) => {
  userModel.findAll().then((output) => {
    console.log(output);
  });

  res.status(200).json({
    message: "Inside route",
  });
};
