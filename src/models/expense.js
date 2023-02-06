const { Model, DataTypes } = require("sequelize");

class Expense extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        value: DataTypes.INTEGER,
        categories: DataTypes.STRING,
        paid_out: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Expense;
