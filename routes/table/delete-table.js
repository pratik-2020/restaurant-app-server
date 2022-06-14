const mongoose = require('mongoose');

const tableModel = require('../../model/table');

const deleteTable = (req, res) => {
    const id = req.body.table;

    tableModel.deleteOne({
        _id: id
    }).then((response) => {
        res.send('Table removed sucessfully!!!');
    }).catch((err) => {
        res.send(err.message);
    })
}

module.exports = deleteTable;