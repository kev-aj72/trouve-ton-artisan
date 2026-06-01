const serviceArtisan = require('../services/artisan');


// Contrôle le retour de tous les artisans.
// Route : GET /api/artisans 

exports.getAllArtisans = async (req, res) => {
    try {
        const artisans = await serviceArtisan.getAllArtisans();

        res.status(200).json(artisans);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


// Contrôle le retour des artisans du mois.
// Route : GET /api/artisans/top
 
exports.getTopArtisans = async (req, res) => {
    try {
        const top = await serviceArtisan.getTopArtisans();

        res.status(200).json(top);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


// Contrôle le retour d'un artisan à partir de son identifiant.
// Route : GET /api/artisans/:id

exports.getArtisanById = async (req, res) => {
    try {
        const artisan = await serviceArtisan.getArtisanById(req.params.id);

        if (!artisan) {
            return res.status(404).json({message: 'Artisan non trouvé'});
        }

        res.status(200).json(artisan);

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};


// Contrôle le retour des artisans d'une catégorie donnée.
// Route : GET /api/artisans/categorie/:categorie

exports.getArtisansByCategorie = async (req, res) => {
    try {
        const artisans = await serviceArtisan.getArtisansByCategorie(req.params.categorie);

        res.status(200).json(artisans);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};