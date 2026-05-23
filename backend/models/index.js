const Categorie = require ('./categorie');
const Specialite = require ('./specialite');
const Artisan = require ('./artisan');


//Une catégorie peut avoir plusieur spécialité

Categorie.hasMany(Specialite, {
    foreignKey: 'Id_categorie'
});

//Mais une spécialité peut avoir une seul catégorie

Specialite.belongsTo(Categorie, {
    foreignKey: 'Id_categorie'
});

//Une spécialité peut avoir plusieur artisan

Specialite.hasMany(Artisan, {
    foreignKey: 'Id_specialite'
});

//Mais un artisan peut avoir une seul spécialité

Artisan.belongsTo(Specialite, {
    foreignKey: 'Id_specialite'
});

module.exports = {Categorie, Specialite, Artisan};