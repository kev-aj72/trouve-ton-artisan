const { Artisan, Specialite, Categorie } = require('../models/index');


//code pour recuperer tous les artisan

exports.getAllArtisans = async () => {
    return await Artisan.findAll({
        include: [
            {
                model: Specialite,

                include: [
                    {
                        model: Categorie
                    }
                ]
            }
        ]
    });
};

//code pour recuperer un artisan 

exports.getArtisanById = async (id) => {
    return await Artisan.findByPk(id, {
        include : [
            {
                model: Specialite,
                include: [
                    {
                        model: Categorie
                    }
                ]
            }
        ]
    });
};

// code pour recuperer tous les artisans d'une categorie

exports.getArtisansByCategorie = async (categorie) => {
    return await Artisan.findAll({
        include: [
            {
                model: Specialite,
                include: [
                    {
                        model: Categorie,
                        where: {
                            Nom: categorie
                        }
                    }
                ]
            }
        ]

    });
};