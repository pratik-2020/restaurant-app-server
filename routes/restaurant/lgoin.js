const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const restaurantModel = require('../../model/restaurant');

const login = (req, res) => {
    const email = req.body.email;
    restaurantModel.find({
        email: email
    }).then((response) => {
        if(response.length === 0){
            res.send('Email not registered');
        }
        else{
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'Capture31122021@gmail.com',
                    pass: 'Capture@123'
                }
                });
                const otp = new Date().getTime() + new Date().getDate();
                var mailOptions = {
                from: 'Capture31122021@gmail.com',
                to: email,
                subject: 'OTP Verification',
                text: 'Your OTP is '+ otp
                };
                
                transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    let restaurantm = new restaurantModel();
                    restaurantModel.updateOne({
                        email: email
                    }, {
                        email: email,
                        restaurant: response[0].restaurant,
                        owner: response[0].owner,
                        address: response[0].address,
                        otp: otp
                    }, (err, data) => {
                        if(err){
                            res.send(err);
                        }
                        else{
                            res.send('Email sent please cheack!!!');
                        }
                    })
                }
                });
                
        }
    }).catch((err) => {
        res.send(err.message);
    })
}

module.exports = login;