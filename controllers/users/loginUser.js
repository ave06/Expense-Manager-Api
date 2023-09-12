const jwt = require("jsonwebtoken");
const db = require("../../database");
const User = require("../../models/users");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.loginUser = async (req, res, next) => {
  try {
    console.log(process.env.JWT_KEY);
  } catch (error) {
    console.log(error);
  }

  const user = await User.findOne({ where: { username: req.body.username } });
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    // if (user === null) {
    //   console.log('Not found!');
    //   return res.status(404).json({
    //     message: "false",
    //   });
    if (err) {
      return res.status(401).json({
        message: "Auth failed",
      });
    }
    if (result) {
      //token
      const token = jwt.sign(
        {
          email: user.username,
          userId: user.password,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "1h",
        }
      );

      console.log("login!");
      return res.status(200).json({
        message: "login successfull",
        token: token,
      });
    }

    return res.status(404).json({
      message: "login failed",
    });
  });
};
