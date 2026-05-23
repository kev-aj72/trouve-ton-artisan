const Categorie = require ('./categorie');
const Specialite = require ('./specialite');
const Artisan = require ('./artisan');


//Une catégorie peut avoir plusieur spécialité

Categorie.hasMany(Specialite, {
    foreignKey: 'Id_categorie'
});

// Mais une spécialité appartient à une seule catégorie

Specialite.belongsTo(Categorie, {
    foreignKey: 'Id_categorie'
});

//Une spécialité peut avoir plusieur artisan

Specialite.hasMany(Artisan, {
    foreignKey: 'Id_specialite'
});

// Mais un artisan appartient à une seule spécialité

Artisan.belongsTo(Specialite, {
    foreignKey: 'Id_specialite'
});

module.exports = {Categorie, Specialite, Artisan};