const { Categorie } = require ('../models/index');

// code pour recuperer toute les categorie 

exports.getAllCategories = async () => {
    return await Categorie.findAll();
};