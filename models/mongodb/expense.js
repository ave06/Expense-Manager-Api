const db = require('../../mongodb');

const expense = db.model('expense', {
    id: Number,
    amount: Number,
    attachment: String,
    createdat: Date,
    updatedat: Date,
    modifiedby: String,
    userid: Number,
    categoryid: Number,
    directionid: Number,
    description: String
});

module.exports = expense;