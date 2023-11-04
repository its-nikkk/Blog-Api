const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb://127.0.0.1:27017";
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000,
        keepAlive: 1,
        dbName: "mern-blog-db",
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;
