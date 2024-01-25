const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const rumShema = new Schema({
  rum: {
    type: String,
    required: true,
  }, //rum name (project or app name)

  description: String, // description of the app

  mix: String, //  rum mix rum variety

  usage: String,

  brand: String, // publisher

  image: {
    type: String,
    //image url
  },

  url: {
    type: String,
  }, //experience url or take a Rum shot

  source: {
    type: String,
  }, //github origin url
});

const rumModel = model("rums", rumShema);
module.exports = rumModel;
