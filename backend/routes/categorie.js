const express = require('express');
const router  = express.Router();

const categorie = require('../controllers/categorie');

//Récuperer toutes les catégories

router.get('/', categorie.getAllCategories);

module.exports = router;