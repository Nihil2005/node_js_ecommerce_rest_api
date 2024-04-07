const express = require("express");
const { creteorder } = require("../controllers/ordercontroller");
const router = express.Router();


router.route('/order').post(creteorder);

module.exports = router;