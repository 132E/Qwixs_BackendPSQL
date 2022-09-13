"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Business.belongsTo(models.Owner, { foreignKey: "ownerId" });
      Business.hasMany(models.Service, { foreignKey: "businessId" });
    }
  }
  Business.init(
    {
      name: DataTypes.STRING,
      coverImage: DataTypes.STRING,
      about: DataTypes.STRING,
      aboutImage: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipcode: DataTypes.INTEGER,
      phone: DataTypes.INTEGER,
      ownerId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "owners",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Business",
      tableName: "businesses",
    }
  );
  return Business;
};
