const express = require("express");
const routes = express.Router();
const categoryController = require("./../../controllers/categoryController")

routes.get("/",categoryController.getAllCategories);


module.exports = routes;