const mongoose = require('mongoose');

const orderModel = require('../../model/order');

const retrieveOrder = (req, res) => {
    const orderid = req.body.id;

    orderModel.find({
        table:orderid
    }).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err.message);
    })
}

module.exports = retrieveOrder;