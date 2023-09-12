const Sequelize = require("sequelize");
const db = require("../database");

const expense = db.define("expenses", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: Sequelize.INTEGER,
  },
  attachment: {
    type: Sequelize.BLOB,
  },
  createdat: {
    type: Sequelize.DATE,
  },
  updatedat: {
    type: Sequelize.DATE,
  },
  modifiedby: {
    type: Sequelize.STRING,
  },
  userid: {
    type: Sequelize.INTEGER,
    references: "user",
    referencesKey: "id",
  },
  categoryid: {
    type: Sequelize.INTEGER,
    references: "category",
    referencesKey: "id",
  },
  directionid: {
    type: Sequelize.INTEGER,
    references: "direction",
    referencesKey: "id",
  },
});

module.exports = expense;
