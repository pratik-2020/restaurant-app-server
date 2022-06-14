const mongoose = require('mongoose');

const tableModel = require('../../model/table');
const restaurantModel = require('../../model/restaurant');
const getTable = (req, res) => {
    const email = req.body.email;
    restaurantModel.find({
        email: email
    }).then((response) => {
        tableModel.find({
            restaurant: response[0].restaurant
        }).then((resp) => {
            res.send(resp);
        }).catch((err) => {
            res.send(err.message);
        })
    }).catch((er) => {
        res.send(er.message);
    })
}

module.exports = getTable;