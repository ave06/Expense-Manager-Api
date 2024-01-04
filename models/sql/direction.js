const Sequelize = require('sequelize');
const db = require('../../database');

const direction = db.define("direction",{
    id:{
        type : Sequelize.INTEGER,
        primaryKey :true,
        autoIncrement : true
    },
    directionname:{
        type: Sequelize.STRING
    }
});

module.exports = direction;