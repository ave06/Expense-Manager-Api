const db = require('../../database');
const category = require('../../models/sql/category');

exports.getCategoryByUserId = (req, res, next) => {
    const ListOfCategory = category.findAll({
        where: { userid: req.params.userid }
    }).then((list) => {
        const data= list.map((e) => e.toJSON());
        // console.log(data);
        return res.status(200).json({
            status: 200,
            message: "fetch succesfull",
            data:data
        })
    }).catch((err) => {
        return res.status(404).json({
            status: 404,
            message: err
        })
    });
};
