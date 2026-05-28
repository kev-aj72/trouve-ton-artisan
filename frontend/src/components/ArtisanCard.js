import { Link } from "react-router-dom";

function ArtisanCard({ artisan }) {

  return (
    <div className="col-12 col-md-6 col-xl-4 mt-2" key={artisan.Id_artisan}>
      <Link
        to={`/artisans/${artisan.Id_artisan}`}
        className="text-decoration-none"
      >
        <div className="card h-100 p-3 ">
          <div className="card-body">

            <div className="row align-items-center justify-content-between">

              <div className="col-6">
                <p className="card-title">
                  {artisan.Nom}
                </p>

                <p className="card-text">
                  Spécialité : {artisan.Specialite?.Nom}
                </p>
              </div>

              <div className="col-6 text-end">
                <p className="card-text">
                  {[1, 2, 3, 4, 5].map((star) => {
  if (artisan.Note >= star) {
    return <i key={star} className="bi bi-star-fill"></i>;
  }

  if (artisan.Note >= star - 0.5) {
    return <i key={star} className="bi bi-star-half"></i>;
  }

  return <i key={star} className="bi bi-star"></i>;
})}

{" "}
{artisan.Note}
                </p>

                <p className="card-text">
                  Ville : {artisan.Ville}
                </p>
              </div>

            </div>

          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArtisanCard;