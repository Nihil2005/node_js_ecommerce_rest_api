const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const db = require('./config/Db');
dotenv.config({path: path.join(__dirname, 'config','config.env')});
db();
app.use(express.json());
const products = require('./routes/Product');
const order = require('./routes/order');


app.use('/api/v1', products);
app.use("/api/v1", order);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})