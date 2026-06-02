import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import ArtisanCard from "../components/ArtisanCard";

function ListeArtisans() {

  // Récupère la catégorie depuis l'URL
  const { categorie } = useParams();
  // Récupère le paramètre de recherche dans l'URL
  const [searchParams] = useSearchParams();
  
  const recherche = searchParams.get("recherche");
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {

    // URL par défaut : tous les artisans
    let url = "http://trouve-ton-artisan-api-1g3f.onrender.com/api/artisans";

    // Filtre les artisans par catégorie si une catégorie est sélectionnée
    if (categorie) {
      url = `http://trouve-ton-artisan-api-1g3f.onrender.com/api/artisans/categorie/${categorie}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {

        let resultats = data;

        // Filtre les artisans selon la recherche saisie
        if (recherche) {

          resultats = data.filter((artisan) => artisan.Nom.toLowerCase().includes(
              recherche.toLowerCase())
          );
        }
        setArtisans(resultats);
      })

      .catch((error) => {
        console.error(error);
      });

  }, [categorie, recherche]);

  return (
    <>
      <Helmet>
        <title>Liste des artisans - Trouve ton artisan</title>
        <meta name="description" content="Consultez la liste des artisans disponibles et trouvez le professionnel adapté à vos besoins."/>
      </Helmet>
        <main className="container py-5">
        
          <h2 className="mb-4">Liste des artisans</h2>
            <div className="row">
              {artisans.map((artisan) => (
              <ArtisanCard key={artisan.Id_artisan} artisan={artisan}/>
            ))}
            </div>

        </main>
    </>
  );
}

export default ListeArtisans;