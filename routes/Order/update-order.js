const mongoose = require('mongoose');

const orderModel = require('../../model/order');

const updateOrder = (req, res) => {
    const id = req.body.id;
    const ordername = req.body.ordername;
    const ordernamequantity = req.body.ordernamequantity;
    const table = req.body.table;
    const verified = req.body.verified;
    const checkout = req.body.checkout;
    orderModel.updateOne({
        _id: id
    }, {
        _id: id,
        ordername: ordername,
        ordernamequantity: ordernamequantity,
        table: table,
        verified: verified,
        checkout: checkout
    }).then((response) => {
        res.send('Order updated!!!');
    }).catch((err) => {
        res.send(err.message);
    })
}

module.exports = updateOrder;