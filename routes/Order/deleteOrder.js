const mongoose = require('mongoose');

const orderModel = require('../../model/order');

const deleteOrder = (req, res) => {
    const orderid = req.body.orderid;

    orderModel.deleteOne({
        _id: orderid
    }).then((response) => {
        res.send('Order deleted');
    }).catch((err) => {
        res.send(err.message);
    })
}

module.exports = deleteOrder;