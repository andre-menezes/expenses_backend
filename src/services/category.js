const CategoryModel = require("../models/category");

const getAllCategories = async () => {
  const categories = await CategoryModel.findAll();
  return categories;
};

const getCategoryById = async (id) => {
  const category = await CategoryModel.findByPk(id);
  return category;
};

const getCategoryByName = async (name) => {
  const category = await CategoryModel.findOne({ where: { name } });
  return category;
};

const setNewCategory = async (data) => {
  const category = await CategoryModel.create(data);
  return category;
};

const updateCategory = async (id, data) => {
  const { name, value, categories, paid_out } = data;
  const category = await CategoryModel.update(
    { name, value, categories, paid_out },
    { where: { id } }
  );

  return category;
};

const deleteCategory = async (id) => {
  const category = await CategoryModel.destroy({
    where: { id },
  });
  return category;
};

module.exports = {
  deleteCategory,
  getAllCategories,
  getCategoryById,
  getCategoryByName,
  setNewCategory,
  updateCategory,
};
