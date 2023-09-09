const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_NAME } = require("./get-env");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "db",
  dialect: "postgres",
});

sequelize.authenticate().then(() => {
  console.log("Successfully connected to sequelize DB");
});

module.exports = sequelize;
