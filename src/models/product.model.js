const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  idUser: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,},
   
});

module.exports = mongoose.model("Product", productSchema);

