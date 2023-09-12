const db = require("../../database");
const Expense = require("../../models/expense");
const User = require("../../models/users");

exports.getExpenseByUserId = async (req, res, next) => {
  try {
    const expense = Expense.findAll({
      where: { userid: req.params.userid },
    }).then((output) => {
      console.log(output);
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "fetch failed",
    });
  }
  return res.status(200).json({
    message: "fetch successfull",
  });
};
