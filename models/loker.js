'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many-to-one relationship with Pengguna
      Loker.belongsTo(models.Pengguna, { foreignKey: 'id_pengguna' });
    }
  }

  Loker.init({
    id_pengguna: DataTypes.INTEGER,
    tanggal_posting: DataTypes.DATE,
    perusahaan: DataTypes.STRING,
    judul_loker: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    posisi_loker: DataTypes.STRING,
    kualifikasi: DataTypes.TEXT,
    jenis_loker: DataTypes.STRING,
    deskripsi_loker: DataTypes.TEXT,
    kontak: DataTypes.STRING,
    gambar_loker: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loker',
  });

  return Loker;
};
