const mongoose = require('mongoose');
const restaurantModel = require('../../model/restaurant');

const otpVerification = (req, res) => {
    const otp = req.body.otp;
    const email = req.body.email;

    restaurantModel.find({
        email: email
    }).then((response) => {
        if(response[0].otp === otp){
            res.send('User can Proceed!!');
        }
        else{
            res.send('Wrong Otp!!!');
        }
    }).catch((err) => {
        res.send(err);
    })
}

module.exports = otpVerification;