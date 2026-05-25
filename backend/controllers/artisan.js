const serviceArtisan = require('../services/artisan');

exports.getAllArtisans = async (req, res) => {
    try {
        const artisans = await serviceArtisan.getAllArtisans();

        res.status(200).json(artisans);

    } catch (error) {
        res.status(500).json({
    message: error.message
        });
    }
};

exports.getTopArtisans = async (req, res) => {
    try {
        const top = await serviceArtisan.getTopArtisans();

        res.status(200).json(top);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getArtisanById = async (req, res) => {
    try {
        const artisan = await serviceArtisan.getArtisanById(req.params.id);

        if (!artisan) {
            return res.status(404).json({
                message: 'Artisan non trouvé'
            });
        }

        res.status(200).json(artisan);

    } catch (error) {
        return res.status(500).json({
    message: error.message
        });
    }
};

exports.getArtisansByCategorie = async (req, res) => {
    try {
        const artisans = await serviceArtisan.getArtisansByCategorie(req.params.categorie);

        res.status(200).json(artisans);

    } catch (error) {
        res.status(500).json({
    message: error.message
        });
    }
};