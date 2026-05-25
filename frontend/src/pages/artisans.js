import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import ArtisanCard from "../components/ArtisanCard";

function ListeArtisans() {

  const { categorie } = useParams();

  const [searchParams] = useSearchParams();

  const recherche = searchParams.get("recherche");

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {

    let url = "http://localhost:3080/api/artisans";

    if (categorie) {
      url = `http://localhost:3080/api/artisans/categorie/${categorie}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {

        let resultats = data;

        if (recherche) {

          resultats = data.filter((artisan) =>
            artisan.Nom.toLowerCase().includes(
              recherche.toLowerCase()
            )
          );

        }

        setArtisans(resultats);

      })
      .catch((error) => {
        console.error(error);
      });

  }, [categorie, recherche]);

  return (

    <main className="container py-5">

      <h1 className="mb-4">
        Liste des artisans
      </h1>

      <div className="row">

        {artisans.map((artisan) => (

          <ArtisanCard
            key={artisan.Id_artisan}
            artisan={artisan}
          />

        ))}

      </div>

    </main>

  );
}

export default ListeArtisans;