const express = require("express");
const categoryRoutes = express.Router();
const CategoryController = require("../controllers/category");

categoryRoutes.get("/api/v1/categories", CategoryController.getAllCategories);
categoryRoutes.get(
  "/api/v1/categories/:id",
  CategoryController.getCategoryById
);
categoryRoutes.post("/api/v1/categories", CategoryController.setNewCategory);
categoryRoutes.put("/api/v1/categories/:id", CategoryController.updateCategory);
categoryRoutes.delete(
  "/api/v1/categories/:id",
  CategoryController.deleteCategory
);

module.exports = categoryRoutes;
