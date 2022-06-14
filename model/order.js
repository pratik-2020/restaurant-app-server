const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    table: {
        type: String,
        required: true
    },
    ordername: {
        type: Array,
        requred: true
    },
    ordernamequantity: {
        type: Array,
        required: true
    },
    checkout: {
        type: String,
        required: true
    },
    verified: {
        type: String,
        required: true
    }
})

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;