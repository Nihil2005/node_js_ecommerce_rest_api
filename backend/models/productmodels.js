const moongoose = require('mongoose');


const productSchema = new moongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images :[
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: String,
    numofreviews: String,
    cretedAt: Date
   
});


const productmodel = moongoose.model('Product', productSchema); 

module.exports = productmodel;

