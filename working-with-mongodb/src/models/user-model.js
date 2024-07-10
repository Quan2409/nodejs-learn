const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: [3, "Username must be at least 3 characters "],
    maxLength: [30, "Username must not more than 30 characters"],
  },

  password: {
    type: String,
  },

  role: {
    type: String,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
