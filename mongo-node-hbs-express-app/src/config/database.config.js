const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database is connected");
  } catch (error) {
    console.log("connection error: " + error);
  }
};

module.exports = connectDatabase;
