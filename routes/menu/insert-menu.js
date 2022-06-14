const mongoose = require('mongoose');
const menuModel = require('../../model/menu');
const restaurantModel = require('../../model/restaurant');
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'ddcituqpc', 
    api_key: '575793552761264', 
    api_secret: 'VrE5wG2lYuobc0S5atbZPe3PhO4',
    secure: true
});
const insertModel = (req, res) => {
    const restaurant = req.body.restaurant;
    const img = req.files.img;
    const name = req.body.name;
    const category = req.body.category;
    cloudinary.uploader.upload(img.tempFilePath, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            restaurantModel.find({
                restaurant: restaurant
            }).then((response) => {
                if(response.length > 0){
                    let menum = new menuModel();
                    menum.restaurant = restaurant;
                    menum.name = name;
                    menum.url = result.url;
                    menum.category = category;
        
                    menum.save((err, data) => {
                        if(err){
                            console.log(err.message);
                        }
                        else{
                            res.send('Menu added!!!');
                        }
                    })
                }
                else{
                    res.send('Restaurant not registered');
                }
            }).catch((err) => {
                res.send(err.message);
            })
        }
    })
    
}

module.exports = insertModel;