const mongoose = require('mongoose');

const menuModel = require('../../model/menu');

const deleteMenu = (req, res) => {
    const menuid = req.body.menuid;

    menuModel.deleteOne({
        _id: menuid
    }).then((response) => {
        res.send('Menu deleted successfully');
    }).catch((err) => {
        res.send(err.message);
    })
}

module.exports = deleteMenu;