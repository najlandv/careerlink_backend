'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sertifikasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many-to-one relationship with Pengguna
      Sertifikasi.belongsTo(models.Pengguna, { foreignKey: 'id_pengguna' });
    }
  }

  Sertifikasi.init({
    id_pengguna: DataTypes.INTEGER,
    tanggal_posting: DataTypes.DATE,
    instansi: DataTypes.STRING,
    judul_sertifikasi: DataTypes.STRING,
    materi: DataTypes.TEXT,
    tanggal_pelaksanaan: DataTypes.DATE,
    benefit: DataTypes.TEXT,
    gambar_sertifikasi: DataTypes.STRING,
    kontak: DataTypes.STRING,
    harga: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Sertifikasi',
  });

  return Sertifikasi;
};
