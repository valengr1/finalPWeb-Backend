const express = require("express");
const routes = express.Router();
const bookController = require("./../../controllers/bookController");

routes
  .get("/", bookController.getAllBooks)
  .post("/", bookController.addANewBook)
  .delete("/:id", bookController.deleteABookById)
  .put("/:id", bookController.updateABookById);

module.exports = routes;
