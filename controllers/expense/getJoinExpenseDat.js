const db = require('../../database');
const Expense = require('../../models/sql/expense');
const User = require('../../models/sql/users');
const Category = require('../../models/sql/category');
const Direction = require('../../models/sql/direction');

exports.getJoinExpnsesData = async (req, res, next) => {
    try {
        Expense.findAll({
            include: [{
                model: User,
                attributes: ['name']
            },
            {
                model: Category,
                attributes: ['categoryname']
            }, {
                model: Direction,
                attributes: ['directionname']
            }
            ]
        }).then((expenses) => {
            const data = expenses.map(e => e.toJSON());
            return res.status(200).json({
                status: 200,
                data: data
            });
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            status: 404
        });

    }
};