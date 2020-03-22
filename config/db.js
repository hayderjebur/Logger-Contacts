const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURL");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
