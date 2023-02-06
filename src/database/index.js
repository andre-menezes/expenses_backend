const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const ExpenseModel = require("../models/expense");

const connection = new Sequelize(dbConfig);

ExpenseModel.init(connection);

module.exports = connection;
