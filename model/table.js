const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    restaurant: {
        type: String,
        required: true
    }
});

const tableModel = mongoose.model('table',tableSchema);

module.exports = tableModel;