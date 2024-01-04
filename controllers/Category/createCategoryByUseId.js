const db = require('../../database');
const category = require('../../models/sql/category');

exports.createCategoryByUserId = (req,res,next) =>{
    category.create({
        categoryname : req.body.categoryname,
        userid : req.body.userid
    }).then((output) => {
    return res.status(200).json({
        status: 200
    })}).catch((err) => console.log(err));
}