const ExpenseModel = require("../models/expense");

const message = require("../assets/messages");

const getAllExpenses = async () => {
  const expenses = await ExpenseModel.findAll();
  return expenses;
};

const getExpenseById = async (id) => {
  const expense = await ExpenseModel.findByPk(id);
  return expense;
};

const setNewExpense = async (data) => {
  const expense = await ExpenseModel.create(data);
  return {
    created: expense,
    msg: expense ? message.CREATED : message.CREATED_ERROR,
  };
};

const updateExpense = async (id, data) => {
  const { name, value, categories, paid_out } = data;
  const expense = await ExpenseModel.update(
    { name, value, categories, paid_out },
    { where: { id } }
  );

  return {
    updated: expense,
    msg: expense ? message.UPDATED : message.UPDATED_ERROR,
  };
};

const deleteExpense = async (id) => {
  const expense = await ExpenseModel.destroy({ where: { id } });

  return {
    deleted: expense,
    msg: expense ? message.DELETED : message.DELETED_ERROR,
  };
};

module.exports = {
  deleteExpense,
  getAllExpenses,
  getExpenseById,
  setNewExpense,
  updateExpense,
};
