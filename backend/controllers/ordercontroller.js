const ordermodel = require('../models/ordermodel');
exports.creteorder = (req,res, next) =>{
    const cartitem = req.body;
    const amount = Number(cartitem.reduce((acc,item)=> (acc +(item.product.price *item.qty))).tofixed(2))

const status = 'pending';


const order = ordermodel.create({cartitems,amount,status})
    res.json({
        sucess: true,
        order
    })
}