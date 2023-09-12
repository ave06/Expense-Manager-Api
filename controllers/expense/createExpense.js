const db = require("../../database");
const Expense = require("../../models/expense");
const User = require("../../models/users");

exports.createExpense = async (req, res, next) => {
  try {
    const timestamp = Date.now();
    const expenseData = await Expense.create({
      amount: req.body.amount,
      attachment: null,
      createdat: timestamp,
      updatedat: timestamp,
      modifiedby: req.body.modifiedby,
      userid: req.body.userid,
      categoryid: req.body.categoryid,
      directionid: req.body.directionid,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "create failed",
    });
  }
  return res.status(200).json({
    message: "create successfull",
  });
};
