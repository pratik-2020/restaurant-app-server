const mongoose = require('mongoose');

const liveOrderSchema = mongoose.Schema({
    table: {
        type: String,
        required: true
    },
    restaurant: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const liveOrderModel = mongoose.model('live order', liveOrderSchema);

module.exports = liveOrderModel;