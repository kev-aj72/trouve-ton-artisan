const { DataTypes } = require ('sequelize');
const sequelize = require ('../db');

const Specialite = sequelize.define('Specialite', {

    Id_specialite: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique : true
    },

    Id_categorie: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},  {
    tableName: 'specialites',
    timestamps: false
});

module.exports = Specialite;