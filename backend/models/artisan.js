const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Artisan = sequelize.define('artisan', {

    Id_artisan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Nom: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    Id_specialite: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    Note: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: false
    },

    Ville: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    A_propos: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    Site_web: {
        type: DataTypes.STRING(100),
        allowNull: true
    },

        Top: {
            type: DataTypes.ENUM('VRAI', 'FAUX'),
            allowNull: false
        }
},  {
    tableName: 'artisans',
    timestamps: false
});

module.exports = Artisan;