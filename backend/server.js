const app       = require ('./app');
const sequelize = require('./db');

require('dotenv').config();

const PORT = process.env.PORT || 3080;

// Démarre le serveur après vérification de la connexion à la base de données

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('MySQL Connecté');

        app.listen(PORT, () => { 
            console.log(`Serveur lancé sur le port ${PORT}`);    
    });
        
    } catch (error) {
        console.error(error);
    }
}

startServer();