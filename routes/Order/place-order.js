const mongoose = require('mongoose');
// const url = require('url');
const orderModel = require('../../model/order');

const placeorder = (req, res) => {
    const table = req.body.table;
    const ordername = req.body.ordername;
    const ordernamequantity = req.body.ordernamequantity;
    // const q = url.parse(req, true);
    // const table = req.query.table;
    let orderm = new orderModel();

    orderm.table = table;
    orderm.ordername = ordername;
    orderm.ordernamequantity = ordernamequantity;
    orderm.checkout = 'No';
    orderm.verified = 'No';
    orderm.save((err, data) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(['Order place successfully', data._id]);
        }
    })
}

module.exports = placeorder;
