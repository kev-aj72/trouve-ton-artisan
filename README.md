# Trouve ton artisan

## Présentation

Trouve ton artisan est une plateforme web permettant aux particuliers de trouver facilement un artisan qualifié dans la région Auvergne-Rhône-Alpes.

L'application permet :

* de consulter les artisans par catégorie ;
* de rechercher un artisan par son nom ;
* d'accéder à une fiche détaillée ;
* de contacter un artisan via un formulaire de contact.

---

## Prérequis

Les logiciels suivants doivent être installés sur votre machine :

* Node.js
* npm
* MySQL
* Git

## Technologies utilisées

### Frontend

* React
* React Router DOM
* Bootstrap
* Sass
* React Helmet Async

### Backend

* Node.js
* Express
* Sequelize

### Base de données

* MySQL

### Outils

* Git
* GitHub
* Visual Studio Code
* Figma

---

## Installation du projet

### 1. Télécharger le projet

Cloner le dépôt GitHub :

git clone https://github.com/kev-aj72/trouve-ton-artisan.git

### 2. Installation du frontend

Ouvrir un terminal dans le dossier frontend puis exécuter :

npm install

Cette commande installe toutes les dépendances nécessaires au fonctionnement de l'application React.

Lancer ensuite le frontend :

npm start

Le site est alors accessible à l'adresse :

http://localhost:3000

### 3. Installation du backend

Ouvrir un terminal dans le dossier backend puis exécuter :

npm install

Cette commande installe les dépendances du serveur Node.js.

Lancer ensuite le backend :

npm start

Pour lancer le serveur en mode développement :

npm run dev

L'API est alors accessible à l'adresse :

http://localhost:3080

### 4. Base de données

Créer la base de données MySQL en exécutant :

- le script de création de la base de données ;
- le script d'alimentation des données.

Une fois ces étapes réalisées, l'application est prête à être utilisée.

## Fonctionnalités

### Accueil

* Présentation du fonctionnement du site ;
* Affichage des trois artisans du mois.

### Liste des artisans

* Affichage par catégorie ;
* Recherche par nom.

### Fiche artisan

* Informations détaillées ;
* Note avec étoiles ;
* Localisation ;
* Description ;
* Formulaire de contact ;
* Lien vers le site web.

### Pages complémentaires

* Mentions légales (page en construction)
* Données personnelles (page en construction)
* Accessibilité (page en construction)
* Cookies (page en construction)
* Page Erreur404.

---

## Sécurité

* Utilisation de Helmet ;
* Gestion des erreurs ;
* Validation des données côté serveur ;
* Séparation Frontend / Backend ;
* Accès à la base de données via Sequelize.

---