const mongoose = require('mongoose');

const restaurantModel = require('../../model/restaurant');

const deleteRestaurant = (req, res) => {
    const restaurant = req.body.restaurant;
    restaurantModel.deleteOne({
        restaurant: restaurant
    }).then((response) => {
        res.send('Restaurant removed');
    }).catch((err) => {
        res.send(err.message);
    });
}

module.exports = deleteRestaurant;