const express = require("express");
const expenseRouter = express.Router();
const expenseController = require("../controllers/expense/getExpenseByUserId");
const createExpenseController = require("../controllers/expense/createExpense");
const expenseJoinData = require("../controllers/expense/getJoinExpenseDat");
expenseRouter.get(
  "/getExpenseByUserId/:userid",
  expenseController.getExpenseByUserId
);
expenseRouter.post("/createExpense/", createExpenseController.createExpense);
expenseRouter.get("/getJoinExpense", expenseJoinData.getJoinExpnsesData);
module.exports = expenseRouter;
