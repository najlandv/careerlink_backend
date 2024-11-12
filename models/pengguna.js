'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengguna extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // One-to-many relationship with Loker, Magang, Sertifikasi
      Pengguna.hasMany(models.Loker, { foreignKey: 'id_pengguna' });
      Pengguna.hasMany(models.Magang, { foreignKey: 'id_pengguna' });
      Pengguna.hasMany(models.Sertifikasi, { foreignKey: 'id_pengguna' });
    }
  }

  Pengguna.init({
    nama_lengkap: DataTypes.STRING,
    nama_pengguna: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pengguna',
  });

  return Pengguna;
};
