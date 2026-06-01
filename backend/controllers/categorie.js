const serviceCategorie = require('../services/categorie');

// Contrôle le retour de toutes les catégories.
// Route : GET /api/categories

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await serviceCategorie.getAllCategories();

        res.status(200).json(categories);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};