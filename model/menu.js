const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    restaurant: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const menuModel = mongoose.model('Menu', menuSchema);

module.exports = menuModel;