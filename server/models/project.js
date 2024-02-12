const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const projectShema = new Schema({
  project: {
    type: String,
    required: true,
  }, //project title (project or app name)

  description: String,

  stack: String,

  image: {
    type: String,
  },

  url: {
    type: String,
  }, 

  source: {
    type: String,
  }, 

  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users' 
  }, 
});

const Project = model("projects", projectShema);
module.exports = Project;
