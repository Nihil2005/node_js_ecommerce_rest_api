const moongoose = require('mongoose');


const orderschema= new moongoose.Schema({
    cartitems: Array,
    amount: String,
    status : String,
    createdAt: Date
})


const ordermodel = moongoose.model('Order', orderschema);

module.exports = ordermodel;