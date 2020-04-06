const express = require("express");
const routes = express.Router();

const CategoriesController = require("./controllers/CategoriesController");
const PostsController = require("./controllers/PostsController");

routes.get("/api/categories", CategoriesController.index);
routes.get("/api/posts", PostsController.index);

module.exports = routes;
