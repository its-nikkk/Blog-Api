const path = require('path');
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const User = require('./../models/user')
const mongoose = require('mongoose');
const connectDB = require("./../db/dbConfig");

connectDB();
(async function seedDB() {
  async function seedUser(userName, email, password, summary, imagePath) {
    try {
      const user = await new User({
        userName,
        email,
        password,
        summary,
        imagePath: imagePath,
      });
      await user.save(function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
      console.log("User added succefully!");
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // async function closeDB() {
  //   await mongoose.disconnect();
  //   console.log("CLOSING CONNECTION");
  // }

  await seedUser(
    "newName",
    "test@test.com",
    "000",
    "some test user!",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1027&q=80"
  );
  await seedUser(
    "testName",
    "test@test.com",
    "000",
    "some test user!",
    "https://images.unsplash.com/photo-1511694009171-3cdddf4484ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  );
  // await closeDB();
})();
