const { DataTypes } = require('sequelize');
const sequelize = require ('../db');

const Categorie = sequelize.define('Categorie', {
    
    Id_categorie: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'categorie',
    timestamps: false
});

module.exports = Categorie