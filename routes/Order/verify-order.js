const mongoose = require('mongoose');
const orderModel = require('../../model/order');

const verifyOrder = (req, res) => {
    const id = req.body.id;
    const verified = req.body.verified;
    const ordername = require.body.ordername;
    const ordernamequantity = req.body.ordernamequantity;
    orderModel.updateOne({
        _id: id
    }, {
        _id: id,
        ordername: ordername,
        ordernamequantity: ordernamequantity,
        checkout: 'NO',
        verified: verified
    }).then((response) => {
        res.send('Order verified!!');
    }).catch((err) => {
        res.send(err);
    })
}

module.exports = verifyOrder;