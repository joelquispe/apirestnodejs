const mongoose = require("mongoose");

const galerySchema = mongoose.Schema({
    idUser: {
        type:String,
        required:true,
    },
  img1: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
    required: true,
  },
  img3: {
    type: String,
    required: true,
  },
  img4: {
    type: String,
    required: true,},
    
});

module.exports = mongoose.model("Galery", productSchema);

