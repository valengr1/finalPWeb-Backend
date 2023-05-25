const express = require("express");
const routes = express.Router();
const userController = require("./../../controllers/userController");

routes
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getAnUserById)
  .post("/", userController.addAnUser)
  .put("/:id", userController.updateAnUserById)
  .delete("/:id",userController.deleteAnUserById)
module.exports = routes;
