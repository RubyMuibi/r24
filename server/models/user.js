const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userShema = new Schema({
  name: {
    type: String,
    required: true,
  }, 

  github_Id: String,

  email: String,

  bio: String, 

  website:  String,

  github:  String,

  twitter: String,
});

const User = model("users", userShema);
module.exports = User;
