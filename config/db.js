const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  database: "crown",
  username: "root",
  password: "",
  host: "localhost",
});

module.exports = sequelize;
