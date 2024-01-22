const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Guard = require("./guard");
const Site = require("./site");

const Work = sequelize.define(
  "work",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    guard_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    site_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "work",
    updatedAt: false,
  }
);

Work.belongsTo(Guard, { foreignKey: "guard_id", as: "guards" });
Work.belongsTo(Site, { foreignKey: "site_id", as: "sites" });

module.exports = Work;
