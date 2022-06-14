const mongoose = require('mongoose');

const menuModel = require('../../model/menu');

const retrieveMenu = (req, res) => {
    const restaurant = req.body.restaurant;
    menuModel.find({
        restaurant: restaurant
    }).then((response) => {
        res.send(response);
    }).catch(err => {
        res.send(err.message);
    })
}

module.exports = retrieveMenu;
