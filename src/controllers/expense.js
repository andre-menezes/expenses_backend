const { StatusCodes } = require("http-status-codes");
const ExpenseServices = require("../services/expense");

const message = require("../assets/messages");

const getAllExpenses = async (_req, res) => {
  try {
    const expenses = await ExpenseServices.getAllExpenses();
    return res.status(StatusCodes.OK).json({ results: expenses });
  } catch (e) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: message.INTERNAL_SERVER_ERROR });
  }
};

const setNewExpense = async (req, res) => {
  try {
    const { data } = req.body;

    if (data) {
      const result = await ExpenseServices.setNewExpense(data);
      return res
        .status(
          result.created
            ? StatusCodes.CREATED
            : StatusCodes.UNPROCESSABLE_ENTITY
        )
        .json({ msg: result.msg });
    }

    return res.status(StatusCodes.CREATED).json({ msg: message.INVALID });
  } catch (e) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: message.INTERNAL_SERVER_ERROR });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const expense = await ExpenseServices.getExpenseById(id);
    if (!expense) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: expense.msg });
    }
    const result = await ExpenseServices.updateExpense(id, data);
    return res
      .status(
        result.updated ? StatusCodes.OK : StatusCodes.UNPROCESSABLE_ENTITY
      )
      .json({ msg: result.msg });
  } catch (e) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: message.INTERNAL_SERVER_ERROR });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await ExpenseServices.getExpenseById(id);
    if (!expense) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: expense.msg });
    }
    const result = await ExpenseServices.deleteExpense(id);
    return res
      .status(
        result.deleted ? StatusCodes.OK : StatusCodes.UNPROCESSABLE_ENTITY
      )
      .json({ msg: result.msg });
  } catch (e) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: message.INTERNAL_SERVER_ERROR });
  }
};

module.exports = {
  getAllExpenses,
  setNewExpense,
  updateExpense,
  deleteExpense,
};
