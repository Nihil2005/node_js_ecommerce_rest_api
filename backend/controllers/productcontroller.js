const productmodel = require('../models/productmodels');
exports.getProducts = async (req,res,next) =>{
    const products = await productmodel.find({});

    res.json({
        sucess: true,
        products
    })
}

exports.getsingleproducts = async (req,res,next)=>{
 try{
    const product = await productmodel.findById(req.params.id);

    res.json({
        sucess: true,
        product
    })
 }catch(err){
    res.json({
        sucess: false,
        message: err
    })
 }
}