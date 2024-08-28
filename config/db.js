const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize({
//   dialect: "mysql",
//   database: "crown",
//   username: "root",
//   password: "",
//   host: "localhost",
// });

const sequelize = new Sequelize({
  dialect: "mysql",
  database: "crown",
  username: "admin",
  password: "Crownn#8102",
  host: "crownn.cq73cskk1uga.us-east-1.rds.amazonaws.com",
});

module.exports = sequelize;
