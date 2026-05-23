const app       = require ('./app');
const sequelize = require('./db');

require('dotenv').config();

const PORT = process.env.PORT || 3080;


async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('MySQL Connecter')
    } catch (error) {
        console.error(error);
    }
}

startServer();