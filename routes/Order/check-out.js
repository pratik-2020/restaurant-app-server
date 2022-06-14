const mongoose = require('mongoose');
const orderModel = require('../../model/order');

const checkoutOrder = (req, res) => {
    const id = req.body.id;
    const order = req.body.order;
    orderModel.updateOne({
        _id: id
    }, order).then((response) => {
        res.send('Order checked out!!!');
    }).catch((err) => {
        res.send(err.message);
    })
}

module.exports = checkoutOrder;