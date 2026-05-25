import { Link } from "react-router-dom";

function ArtisanCard({ artisan }) {

  const note = Math.round(Number(artisan.Note));

  return (

    <div className="col-12 col-md-6 col-lg-4 mb-4">

      <Link
        to={`/artisans/${artisan.Id_artisan}`}
        className="text-decoration-none text-dark"
      >

        <div className="card h-100 shadow-sm">

          <div className="card-body">

            <h2 className="h5 card-title">
              {artisan.Nom}
            </h2>

            <p className="mb-2">
              {"★".repeat(note)}
              {"☆".repeat(5 - note)}
            </p>

            <p className="mb-2">
              <strong>Spécialité :</strong>{" "}
              {artisan.Specialite?.Nom}
            </p>

            <p className="mb-0">
              <strong>Ville :</strong>{" "}
              {artisan.Ville}
            </p>

          </div>

        </div>

      </Link>

    </div>

  );
}

export default ArtisanCard;