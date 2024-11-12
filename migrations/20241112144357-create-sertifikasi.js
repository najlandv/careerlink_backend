'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sertifikasis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pengguna: {
        type: Sequelize.INTEGER
      },
      tanggal_posting: {
        type: Sequelize.DATE
      },
      instansi: {
        type: Sequelize.STRING
      },
      judul_sertifikasi: {
        type: Sequelize.STRING
      },
      materi: {
        type: Sequelize.TEXT
      },
      tanggal_pelaksanaan: {
        type: Sequelize.DATE
      },
      benefit: {
        type: Sequelize.TEXT
      },
      gambar_sertifikasi: {
        type: Sequelize.STRING
      },
      kontak: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sertifikasis');
  }
};