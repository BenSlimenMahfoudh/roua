const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  dateComment: {
    type: String,
    required: true,
    // default: Date.now,
  },

  timeComment: {
    type: String,
    required: true,
    // default: Date.now,
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
