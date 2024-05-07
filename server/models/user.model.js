const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userShema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
  },

  bio: {
    type: String,
  },

  website: {
    type: String,
  },

  github: {
    type: String,
  },
});

const User = model("users", userShema);
module.exports = User;
