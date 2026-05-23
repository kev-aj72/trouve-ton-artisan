const express = require ('espress');
const router  = express.router();

const categorie = require('../controllers/categorie');

//Récuperer toutes les catégories

router.get('/', categorie.getAllCategories);

module.exports = router;