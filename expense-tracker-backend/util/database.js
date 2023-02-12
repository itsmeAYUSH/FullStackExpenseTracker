const Sequelize = require("sequelize");

const sequelize = new Sequelize("expensetrackerfullstack", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
