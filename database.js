const Sequelize = require("sequelize");

const db = new Sequelize("school", "postgres", "test", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

module.exports = db;
