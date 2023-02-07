"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Alimentação",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Financeiro",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Lazer",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Moradia",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Outros",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pessoal",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Saúde",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Transporte",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
