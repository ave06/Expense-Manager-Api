const db = require("../../database");
const Expense = require("../../models/sql/expense");
const mongoExpense = require("../../models/mongodb/expense");

exports.createExpense = async (req, res, next) => {
  try {
    const timestamp = Date.now();
    const expenseData = await Expense.create({
      amount: req.body.amount,
      attachment: req.body.attachment,
      createdat: timestamp,
      updatedat: timestamp,
      modifiedby: req.body.modifiedby,
      userid: req.body.userid,
      categoryid: req.body.categoryid,
      directionid: req.body.directionid,
      description: req.body.description
    });

    const expenseToBeCreated = new mongoExpense({
      amount: req.body.amount,
      attachment: req.body.attachment,
      createdat: timestamp,
      updatedat: timestamp,
      modifiedby: req.body.modifiedby,
      userid: req.body.userid,
      categoryid: req.body.categoryid,
      directionid: req.body.directionid,
      description: req.body.description
    });
    
    const mongoResponse = await expenseToBeCreated.save();
    console.log('mongoexpense=>33'+mongoResponse);

    return res.status(200).json({
      status: 200,
      message: "create successfull",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      status: 404,
      message: "create failed",
      data: error
    });
  }
};
