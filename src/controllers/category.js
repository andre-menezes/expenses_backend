const { StatusCodes } = require("http-status-codes");
const CategoryServices = require("../services/category");

const message = require("../assets/messages");

const getAllCategories = async (_req, res) => {
  try {
    const categories = await CategoryServices.getAllCategories();
    return res.status(StatusCodes.OK).json({ results: categories });
  } catch (e) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: message.INTERNAL_SERVER_ERROR });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const results = await CategoryServices.getCategoryById(id);
    return results
      ? res
          .status(StatusCodes.OK)
          .json({ msg: message.category.FOUNDED, results })
      : res
          .status(StatusCodes.NOT_FOUND)
          .json({ msg: message.category.NOT_FOUND });
  } catch (e) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: message.INTERNAL_SERVER_ERROR });
  }
};

const setNewCategory = async (req, res) => {
  try {
    const { data } = req.body;

    if (data) {
      const categoryExists = await CategoryServices.getCategoryByName(
        data.name
      );
      if (categoryExists)
        return res
          .status(StatusCodes.UNPROCESSABLE_ENTITY)
          .json({ msg: message.category.EXISTS });

      const results = await CategoryServices.setNewCategory(data);
      return results
        ? res
            .status(StatusCodes.CREATED)
            .json({ msg: message.category.CREATED, results })
        : res
            .status(StatusCodes.NOT_FOUND)
            .json({ msg: message.category.CREATED_ERROR });
    }

    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ msg: message.INVALID });
  } catch (e) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: message.INTERNAL_SERVER_ERROR });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    const categoryExists = await CategoryServices.getCategoryById(id);

    if (!categoryExists)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: message.category.NOT_FOUND });

    if (id && data) {
      const results = await CategoryServices.updateCategory(id, data);
      return results
        ? res.status(StatusCodes.OK).json({ msg: message.category.UPDATED })
        : res
            .status(StatusCodes.UNPROCESSABLE_ENTITY)
            .json({ msg: message.category.UPDATED_ERROR });
    }

    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ msg: message.INVALID });
  } catch (e) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: message.INTERNAL_SERVER_ERROR });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const categoryExists = await CategoryServices.getCategoryById(id);

    if (!categoryExists)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: message.category.NOT_FOUND });

    const results = await CategoryServices.deleteCategory(id);
    return results
      ? res.status(StatusCodes.OK).json({ msg: message.category.DELETED })
      : res
          .status(StatusCodes.UNPROCESSABLE_ENTITY)
          .json({ msg: message.category.DELETED_ERROR });
  } catch (e) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: message.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  setNewCategory,
  updateCategory,
  deleteCategory,
};
