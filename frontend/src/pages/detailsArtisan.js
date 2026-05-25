import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {

  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:3080/api/artisans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArtisan(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, [id]);

  if (!artisan) {
    return <h1>Chargement...</h1>;
  }

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h1>{artisan.Nom}</h1>

        <p>
          <strong>Ville :</strong> {artisan.Ville}
        </p>

        <p>
          <strong>Note :</strong> {artisan.Note}
        </p>

        <p>
  <strong>Spécialité :</strong>{" "}
  {artisan.Specialite?.Nom}
</p>

<p>
  <strong>Catégorie :</strong>{" "}
  {artisan.Specialite?.Categorie?.Nom}
</p>

      </div>

    </div>

  );
}

export default Details;