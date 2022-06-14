const mongoose = require('mongoose');

const liveOrderModel = require('../../model/live-order');

const deleteLiveOrder = (req, res) => {
    const table = req.body.table;

    liveOrderModel.deleteOne({
        table: table
    }).then((response) => {
        res.send('Live status removed');
    }).catch((err) => {
        res.send(err.message);
    })
}


module.exports = deleteLiveOrder;