const mongoose = require('mongoose');

const restaurantModel = require('../../model/restaurant');

const retrieveRestaurant = (req, res) => {
    const restaurant = req.body.restaurant;

    restaurantModel.find({
        restaurant: restaurant
    }).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err.message);
    })
}

module.exports = retrieveRestaurant;