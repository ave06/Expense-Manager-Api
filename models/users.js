const Sequelize = require("sequelize");
const db = require("../database");

const user = db.define("appusers", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  createdOn: {
    type: Sequelize.DATE,
  },
});

module.exports = user;
