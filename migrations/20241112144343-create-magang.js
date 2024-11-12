'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Magangs', {
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
      perusahaan: {
        type: Sequelize.STRING
      },
      judul_magang: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      },
      posisi_magang: {
        type: Sequelize.STRING
      },
      kualifikasi: {
        type: Sequelize.TEXT
      },
      jenis_magang: {
        type: Sequelize.STRING
      },
      durasi_magang: {
        type: Sequelize.STRING
      },
      deskripsi_magang: {
        type: Sequelize.TEXT
      },
      kontak: {
        type: Sequelize.STRING
      },
      gambar_magang: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Magangs');
  }
};