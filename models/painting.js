'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class painting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.painting.belongsTo(models.artist)
    }
  }
  painting.init({
    name: DataTypes.STRING,
    style: DataTypes.STRING,
    img_url: DataTypes.STRING,
    artistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'painting',
  });
  return painting;
};