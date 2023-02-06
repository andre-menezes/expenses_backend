const express = require("express");
const expenseRoutes = express.Router();
const ExpenseController = require("../controllers/expense");

expenseRoutes.get("/api/v1/expenses", ExpenseController.getAllExpenses);
expenseRoutes.post("/api/v1/expenses", ExpenseController.setNewExpense);
expenseRoutes.put("/api/v1/expenses/:id", ExpenseController.updateExpense);
expenseRoutes.delete("/api/v1/expenses/:id", ExpenseController.deleteExpense);

module.exports = expenseRoutes;
