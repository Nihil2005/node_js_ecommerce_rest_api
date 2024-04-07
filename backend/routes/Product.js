const express = require("express");
const { getProducts, getsingleproducts } = require("../controllers/productcontroller");
const router = express.Router();


router.route('/products').get(getProducts);
router.route('/product/:id').get(getsingleproducts);

module.exports = router;