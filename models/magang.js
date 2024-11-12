'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Magang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many-to-one relationship with Pengguna
      Magang.belongsTo(models.Pengguna, { foreignKey: 'id_pengguna' });
    }
  }

  Magang.init({
    id_pengguna: DataTypes.INTEGER,
    tanggal_posting: DataTypes.DATE,
    perusahaan: DataTypes.STRING,
    judul_magang: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    posisi_magang: DataTypes.STRING,
    kualifikasi: DataTypes.TEXT,
    jenis_magang: DataTypes.STRING,
    durasi_magang: DataTypes.STRING,
    deskripsi_magang: DataTypes.TEXT,
    kontak: DataTypes.STRING,
    gambar_magang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Magang',
  });

  return Magang;
};
