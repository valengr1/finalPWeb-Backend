const express = require("express");
const routes = express.Router();
const bookController = require("./../../controllers/bookController");

routes
  .get("/", bookController.getAllBooks)
  .post("/", bookController.addANewBook)
  .get("/:id", bookController.getABookById)
  .delete("/:id", bookController.deleteABookById)
  .put("/:id", bookController.updateABookById);

module.exports = routes;
