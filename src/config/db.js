const mongoose = require("mongoose");
const { DB_URL } = require("./");

const connectDB = async () => {
  try {
    if (!DB_URL) throw "Invalid DB_URL";

    await mongoose.connect(DB_URL).then(() => {
      console.log("MongoDB Connection Established...");
    });
  } catch (error) {
    console.log("Error while connection MongoDB ::::::: \n", error);
    process.exit(1);
  }
};

module.exports = connectDB;
