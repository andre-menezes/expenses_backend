const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const ExpenseModel = require("../models/expense");
const CategoryModel = require("../models/category");

const connection = new Sequelize(dbConfig);

ExpenseModel.init(connection);
CategoryModel.init(connection);

module.exports = connection;
