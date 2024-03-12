var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

var userModel = mongoose.model("users", userSchema);

module.exports = userModel;
