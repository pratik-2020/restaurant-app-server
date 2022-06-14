const mongoose = require('mongoose');
const orderModel = require('../../model/order');

const retStatus = (req, res) => {
    const id = req.body.id;
    orderModel.find({
        _id: id
    }).then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
}

module.exports = retStatus;