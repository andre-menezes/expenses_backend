require("dotenv").config();
require("./database");
const express = require("express");
const { StatusCodes } = require("http-status-codes");
const categoryRoutes = require("./routes/category");
const expenseRoutes = require("./routes/expense");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT, () => console.log(`Online at port ${PORT}`));

app.use(expenseRoutes, categoryRoutes);

app.get("/", (_req, res) =>
  res.status(StatusCodes.OK).json({ msg: "Expenses Project" })
);

module.exports = app;
