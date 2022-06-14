const mongoose = require('mongoose');

const tableModel = require('../../model/table');

const insertTable = (req, res) => {
    const restaurant = req.body.restaurant;

    let tablem = new tableModel();
    tablem.restaurant = restaurant;
    tablem.save((err, data) => {
        if(err){
            res.send(err.message);
        }
        else{
            res.send('Table added successfully!!!');
        }
    })
}

module.exports = insertTable;