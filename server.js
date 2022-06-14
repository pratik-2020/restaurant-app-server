const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const db = 'mongodb+srv://Pratik:Pratik@cluster0.piw6f.mongodb.net/restaurant-app?retryWrites=true&w=majority'
const insertOrder = require('./routes/Order/place-order');
const retrieveMenu = require('./routes/menu/retrieve-menu');
const insertMenu = require('./routes/menu/insert-menu');
const retrieveOrder = require('./routes/Order/retrieve-order');
const deleteOrder = require('./routes/Order/deleteOrder');
const deleteRestaurant = require('./routes/restaurant/delete-restaurant');
const deleteMenu = require('./routes/menu/delete-menu');
const deleteLiveOrder = require('./routes/Live Order/delete-live-order');
const login = require('./routes/restaurant/lgoin');
const insertTable = require('./routes/table/insert-table');
const deleteTable = require('./routes/table/delete-table');
const insertRestaurant = require('./routes/restaurant/insert-restaurant');
const otpVerification = require('./routes/restaurant/otp-verification');
const retrieveRestaurant = require('./routes/restaurant/retrieve-restaurant');
const updateOrder = require('./routes/Order/update-order');
const getTable = require('./routes/table/get-table');
const fileUpload = require('express-fileupload');
// const orderCheckout = require('./routes/Order/check-out');
const checkoutOrder = require('./routes/Order/check-out');
const insertLiveOrder = require('./routes/Live Order/insert-live-order');
const getLiveOrder = require('./routes/Live Order/get-live-order');
const getMenu = require('./routes/menu/get-menu');
const verifyOrder = require('./routes/Order/verify-order');
const retStatus = require('./routes/Order/ret-status');

app.use(express.json());
app.use(fileUpload({
    useTempFiles: true
}));
app.use(cors({
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ]
}))
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection successful!!!');
})
.catch((err) => {
    console.log(err.message);
})
app.post('/placeorder', (req, res) => {
    insertOrder(req, res);
})
app.post('/getmenu', (req, res) => {
    retrieveMenu(req, res);
});
app.post('/insertliveorder',(req, res) => {
    insertLiveOrder(req, res);
});
app.post('/login', (req, res) => {
    login(req, res);
});
app.post('/getliveorder', (req, res) => {
    getLiveOrder(req, res);
})
app.post('/deleteliveorder', (req, res) => {
    deleteLiveOrder(req, res);
});
app.post('/otpverification', (req, res) => {
    otpVerification(req, res);
});
app.post('/retstatus', (req, res) => {
    retStatus(req, res);
});
app.post('/insertmenu', (req, res) => {
    insertMenu(req, res);
});
app.post('/retmenu', (req, res) => {
    getMenu(req, res);
});
app.post('/retrieveorder', (req, res) => {
    retrieveOrder(req, res);
});
app.post('/deleteorder', (req, res) => {
    deleteOrder(req, res);
});
app.post('/deletemenu', (req, res) =>{
    deleteMenu(req, res);
});
app.post('/deleterestaurant', (req, res) => {
    deleteRestaurant(req, res);
});
app.post('/deletetable', (req, res) => {
    deleteTable(req, res);
})
app.post('/inserttable', (req, res) => {
    insertTable(req, res);
});
app.post('/insertrestaurant', (req, res) => {
    insertRestaurant(req, res);
})
app.post('/retrieverestaurant', (req, res) => {
    retrieveRestaurant(req, res);
});
app.post('/updateorder', (req, res) => {
    updateOrder(req, res);
});
app.post('/gettable', (req, res) => {
    getTable(req, res);
});
app.post('/checkout', (req, res) => {
    checkoutOrder(req, res);
});
app.post('/verifyorder', (req, res) => {
    verifyOrder(req, res);
})
app.listen(3001, () => console.log('Listening at 3001'));
//Prat@123
//pr378598@dal.ca