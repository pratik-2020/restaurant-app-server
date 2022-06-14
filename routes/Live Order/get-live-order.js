const mongoose = require('mongoose');

const liveOrderModel = require('../../model/live-order');

const restaurantModel = require('../../model/restaurant');
const getLiveOrder = (req, res) => {
    const restaurant = req.body.rest;
    const email = req.body.email;

    restaurantModel.find({
        email: email
    }).then((response) => {
        if(response.length > 0){
            liveOrderModel.find({
                restaurant: response[0].restaurant
            }).then((response) => {
                res.send(response);
            }).catch((err) => {
                res.send(err);
            })
        }
        else{
            res.send('User not registered');
        }
    })
}

module.exports = getLiveOrder;