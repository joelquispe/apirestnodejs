const express = require("express");
const app = express();
const path = require('path')

require("dotenv").config();

const routeProduct = require('./routes/product.route');
const routeUser = require('./routes/user.route');
const port = process.env.PORT || 5000;

app.use('/',express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended:false }));

app.use(express.json());

app.use('/api',routeProduct);
app.use('/api',routeUser);
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});



const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/crudproduct", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("> Connected..."))
  .catch((err) => console.log(`> Error while connecting to mongoDB : `));

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);

