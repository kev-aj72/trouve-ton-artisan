-- -----------------------------------------------------------------------------
-- PROJET TROUVE TON ARTISAN - SCRIPT DE CREATION STRUCTURE
-- -----------------------------------------------------------------------------


--
-- Suppression + création base de données : `trouve_ton_artisan`
--

DROP DATABASE IF EXISTS trouve_ton_artisan;

CREATE DATABASE trouve_ton_artisan
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_bin;
    
-- -----------------------------------------------------------------------------
--
-- Sélection base de données
--
    USE trouve_ton_artisan;

-- -----------------------------------------------------------------------------

--
-- Création de l'utilisateur et attribution des droits
--

DROP USER IF EXISTS 'artisan'@'localhost';

CREATE USER 'artisan'@'localhost' 
IDENTIFIED BY 'artisanPassword!';

GRANT SELECT, INSERT, UPDATE, DELETE, CREATE ON trouve_ton_artisan.* TO 'artisan'@'localhost';
FLUSH PRIVILEGES;
-- -----------------------------------------------------------------------------

--
-- Structure table `categorie`
--

CREATE TABLE `categorie` (
  `Id_categorie` INT NOT NULL AUTO_INCREMENT,
  `Nom` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`Id_categorie`),
    UNIQUE KEY `categorie_nom` (`Nom`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------



--
-- Structure table `specialites`
--

CREATE TABLE `specialites` (
  `Id_specialite` INT NOT NULL AUTO_INCREMENT,
  `Nom` VARCHAR(50)  NOT NULL,
  `Id_categorie` INT NOT NULL,

  PRIMARY KEY (`Id_specialite`),
  UNIQUE KEY `specialite_nom` (`Nom`), 
    CONSTRAINT fk_specialites_categorie
        FOREIGN KEY (Id_categorie) REFERENCES categorie(Id_categorie)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Structure table `artisans`
--

CREATE TABLE `artisans` (
  `Id_artisan` INT NOT NULL AUTO_INCREMENT,
  `Nom` VARCHAR(100)  NOT NULL,
  `Id_specialite` INT NOT NULL,
  `Note` DECIMAL(2,1) NOT NULL,
  `Ville` VARCHAR(50) NOT NULL,
  `A_propos` TEXT NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Site_web` VARCHAR(100) DEFAULT NULL,
  `Top` ENUM ('VRAI','FAUX') NOT NULL,

  PRIMARY KEY   (`Id_artisan`),
  UNIQUE KEY `artisan_nom` (`Nom`),
  UNIQUE KEY `artisan_email` (`Email`),  

  CONSTRAINT fk_artisans_specialite
        FOREIGN KEY (Id_specialite) REFERENCES specialites(Id_specialite)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------
