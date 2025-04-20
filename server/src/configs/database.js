const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  console.log("Establishing connection to database...");
  await mongoose.connect(
    "mongodb+srv://kspvsivalalith:tzDPq2zTSJmrKM0z@cluster0.0ys2zcn.mongodb.net/Digital_Diner?retryWrites=true&w=majority&appName=Cluster0"
  );
};

module.exports = { connectToMongoDB };
