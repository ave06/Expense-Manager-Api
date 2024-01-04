const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/Category/getCategoryByUserId");
const createCategorycontroller = require("../controllers/Category/createCategoryByUseId")
categoryRouter.get("/getCategoryByUserId/:userid", categoryController.getCategoryByUserId);
categoryRouter.post("/createCategoryByUserId/" ,createCategorycontroller.createCategoryByUserId);
module.exports = categoryRouter;