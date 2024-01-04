const mongoose = require('mongoose');

const dbUrl = 'mongodb://127.0.0.1:27017/expense-manager';

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on('error', (error) =>{
    console.error('mongodb connection error', error);
});

db.once('open', () =>{
    console.log('connection to mongodb successful');
});

module.exports = db;