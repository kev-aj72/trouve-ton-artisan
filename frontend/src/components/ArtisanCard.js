import { Link } from "react-router-dom";

 // Affiche une carte résumant les informations d'un artisan
 
function ArtisanCard({ artisan }) {
  return (
    <div className="col-12 col-md-6 col-xl-4 mt-2 d-flex">
      <Link to={`/artisans/${artisan.Id_artisan}`} className="text-decoration-none w-100 d-flex">
        <div className="artisan-card card w-100">
          <div className="card-body d-flex align-items-center">
            <div className="row align-items-center gx-1 w-100">
              <div className="col-7">
                <p className="card-title">{artisan.Nom}</p>

                <p className="card-text">Spécialité : {artisan.Specialite?.Nom}</p>
              </div>

              <div className="col-5 text-end">
                <p className="card-text"> {[1, 2, 3, 4, 5].map((star) => {
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

                <p className="card-text">Ville : {artisan.Ville}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArtisanCard;