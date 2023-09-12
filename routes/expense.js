const express = require("express");
const expenseRouter = express.Router();
const expenseController = require("../controllers/expense/getExpenseByUserId");
const createExpenseController = require("../controllers/expense/createExpense");

expenseRouter.get(
  "/getExpenseByUserId/:userid",
  expenseController.getExpenseByUserId
);
expenseRouter.post("/createExpense/", createExpenseController.createExpense);
module.exports = expenseRouter;
