"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Service.belongsTo(models.Business, { foreignKey: "businessId" });
    }
  }
  Service.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      businessId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "businesses",
          key: "id",
      }
    },
    {
      sequelize,
      modelName: "Service",
      tableName: "services",
    }
  );
  return Service;
};
