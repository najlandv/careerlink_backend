'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lokers', {
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
      judul_loker: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      },
      posisi_loker: {
        type: Sequelize.STRING
      },
      kualifikasi: {
        type: Sequelize.TEXT
      },
      jenis_loker: {
        type: Sequelize.STRING
      },
      deskripsi_loker: {
        type: Sequelize.TEXT
      },
      kontak: {
        type: Sequelize.STRING
      },
      gambar_loker: {
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
    await queryInterface.dropTable('Lokers');
  }
};