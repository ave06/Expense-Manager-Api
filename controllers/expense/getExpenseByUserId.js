const db = require("../../database");
const Expense = require("../../models/sql/expense");

exports.getExpenseByUserId = async (req, res, next) => {
  try {
    const expense = Expense.findAll({
      where: { userid: req.params.userid },
    }).then((expenses) => {
      const data = expenses.map(e => e.toJSON());
      console.log("bac============>"+data.directionid);
      return res.status(200).json({
        message: "fetch successfull",
        data:data
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "fetch failed"
    });
  }
};
