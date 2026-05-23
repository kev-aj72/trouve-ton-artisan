const express = require ('express');
const cors    = require ('cors');
const helmet  = require ('helmet');
const logger  = require ('morgan');

const artisanRoutes   = require ('./routes/artisan');
const categorieRoutes = require ('./routes/categorie');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(logger('dev'));


// Route base api

app.get('/', (req, res) => {
    res.json({
        message:'API TEST'
    });
});

//Route API dossier routes

app.use('/api/artisans', artisanRoutes);
app.use('/api/categories', categorieRoutes);

//Route erreur 404

app.use((req, res) => {
    res.status(404).json({
        message: 'route inconnue'
    });
});

module.exports = app;