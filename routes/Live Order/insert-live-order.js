const mongoose = require('mongoose');
const liveOrderModel = require('../../model/live-order');
const insertLiveOrder = (req, res) => {
    const restaurant = req.body.rest;
    const table = req.body.tab;
    const status = req.body.status;
    let liveorder = new liveOrderModel();
    liveorder.restaurant = restaurant;
    liveorder.table = table;
    liveorder.status = status;
    liveorder.save((err, data) => {
        if(err){
            res.send(err);
        }
        else{
            res.send('Status updated');
        }
    })
}

module.exports = insertLiveOrder;