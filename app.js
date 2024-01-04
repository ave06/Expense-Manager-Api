const express = require("express");
var morgan = require("morgan");
var fs = require("fs");
const cors = require("cors");
// var rfs = require('rotating-file-stream') // version 2.x
const { Client } = require("pg");
const app = express();
const router = express.Router();
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");
// const accessLogStream = require('./middleware/logging')
const usersRoute = require("./routes/users");
const expenseRoute = require("./routes/expense");
const sequelize = require("./database");
const categoryRouter = require("./routes/category");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require("./swaggerConfig.js");
// var logger = require('morgan');

// app.use(logger('common', {
//     stream: fs.createWriteStream('./access.log', {flags: 'a'})
// }));
// app.use(logger('dev'));

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => {
    console.log("Could not connect!");
  });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use(morgan('dev'))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/users", usersRoute);
app.use("/expense", expenseRoute);
app.use("/category" , categoryRouter);

app.use((req, res, next) => {
  res.status(200).json({
    message: "It works!",
  });
});

module.exports = app;
