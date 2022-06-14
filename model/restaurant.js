const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    restaurant: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String
    }
})

const restaurantModel = mongoose.model('Restaurant', restaurantSchema);

module.exports = restaurantModel;