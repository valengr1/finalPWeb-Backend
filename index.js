const express = require("express");
const app = express();
const bookRoutesV1 = require("./v1/routes/bookRoutes");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
require("dotenv").config();
const cors = require("cors");

//configuration
app.set("port", 9000);

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

//middlewares
app.use(cors());
app.use(express.json());
app.use(myConnection(mysql, dbConfig, "single"));
app.use("/api/v1", bookRoutesV1);

//server running
app.listen(app.get("port"), () => {
  console.log("server running on port ", app.get("port"));
});
