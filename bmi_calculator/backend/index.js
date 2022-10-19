const express = require("express");
const cors = require("cors");
const connection = require("./config/connection");
const userManage = require("./routes/user.Routes");
const authentication = require("./middleware/authentication");
const bmiRoute = require("./routes/bmi.Routes");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/user", userManage);

app.use(authentication);
app.get("/logout", (req, res) => {
  try {
    window.localStorage.removeItem("token");
    res.redirect("/");
  } catch (error) {
    res.status(500).send(error);
  }
});
app.use("/user", bmiRoute);
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Server Conected");
  } catch (error) {
    console.log(error);
  }
  console.log("Server is Running at 8080");
});
