const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  UserID:{
    type: String,
    required: true,
  },
  
  dateComment: {
    type: String,
    required: true,
  },

  timeComment: {
    type: String,
    required: true,
  },

  comment: {
    type: String,
    required: false,
  },
  byUser: {
    type: String,
    required: false,
     
  },
  postUser: {
    type: String,
    required: false,
     
  }
});

module.exports = mongoose.model("comments", comment);
