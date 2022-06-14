const mongoose = require('mongoose');
const tableMenu = require('../../model/table');
const menuModel = require('../../model/menu');

const getMenu = (req, res) => {
    const table = req.body.table;
    tableMenu.find({
        _id: table
    }).then((response) => {
        if(response.length > 0){
            menuModel.find({
                restaurant: response[0].restaurant
            }).then((resp) => {
                res.send(resp);
            }).catch(er => {
                res.send(er);
            })
        }
        else{
            res.send('Table not registered!!');
        }
    }).catch((err) => {
        res.send(err);
    });
}

module.exports = getMenu;