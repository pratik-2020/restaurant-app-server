const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const restaurantModel = require('../../model/restaurant');

const insertRestaurant = (req, res) => {
    const restaurant = req.body.name;
    const owner = req.body.owner;
    const address = req.body.address;
    const email = req.body.email;

    restaurantModel.find({
        email: email
    }).then((response) => {
        if(response.length > 0){
            res.send('Email already registered');
        }
        else{
            let restaurantm = new restaurantModel();
            const otp = ''+ restaurant+ new Date().getTime() + new Date().getDate();
            restaurantm.restaurant = otp;
            restaurantm.owner = owner;
            restaurantm.address = address;
            restaurantm.email = email;

            restaurantm.save((err, data) => {
                if(err){
                    res.send(err.message);
                }
                else{
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'Capture31122021@gmail.com',
                            pass: 'Capture@123'
                        }
                        });
                        var mailOptions = {
                        from: 'Capture31122021@gmail.com',
                        to: email,
                        subject: 'OTP Verification',
                        text: `Your hotel id is ${otp}`
                        };
                        transporter.sendMail(mailOptions, (err) => {
                            if(err){
                                res.send('Mail not sent');
                            }
                            else{
                                res.send('Hotel registered successfully plase check your mail regarding your credentials');
                            }
                        })
                    }
                })
        }
    }).catch((err) => {
        res.send(err.message);
    })
}

module.exports = insertRestaurant;