const Sequelize = require('sequelize');
const db = require('../../database');
const user = require("../sql/users");

const category = db.define("category", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoryname: {
        type: Sequelize.STRING
    },
    userid: {
        type: Sequelize.INTEGER,
        references: "user",
        referencesKey: "id"
    }
});

module.exports = category;