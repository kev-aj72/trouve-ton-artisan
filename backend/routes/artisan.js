const express = require('express');
const router  = express.Router();

const artisan = require ('../controllers/artisan');

//récuperer tous les artisans

router.get('/', artisan.getAllArtisans);

//récuperer les top artisans du mois 

router.get('/top', artisan.getTopArtisans);

//récuperer les artisans

router.get('/categorie/:categorie', artisan.getArtisansByCategorie);

//recuperer un artisan grace a l'id 

router.get('/:id', artisan.getArtisanById);

module.exports = router;