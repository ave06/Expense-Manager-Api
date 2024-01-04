const db = require("../../database");
const User = require("../../models/sql/users");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res, next) => {
  // current timestamp in milliseconds
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        error: err,
      });
    } else {
      const timestamp = Date.now();
      try {
        const user = User.create({
          name: req.body.name,
          username: req.body.username,
          password: hash,
          createdOn: timestamp,
        });
      } catch (error) {
        return res.status(500).json({
          status: 500,
          error: error,
        });
      }
      return res.status(200).json({
        status: 200,
        message: "user created successfully",
      });
    }
  });
};
