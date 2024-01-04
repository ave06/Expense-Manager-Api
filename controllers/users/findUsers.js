const db = require("../../database");
const User = require("../../models/sql/users");

exports.findUsers = async (req, res, next) => {
  const user = await User.findOne({ where: { username: req.params.username } });
  if (user === null) {
    console.log("Not found!");
    res.status(404).json({
      message: "false",
    });
  } else {
    console.log(user instanceof User);
    console.log(user.username);
    res.status(200).json({
      message: "true",
    });
  }
};
