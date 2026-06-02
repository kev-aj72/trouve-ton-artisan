import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../components/contactForm";

function Details() {
  // Récupère l'identifiant de l'artisan dans l'URL
  const { id } = useParams();

  // Stocke les informations de l'artisan
  const [artisan, setArtisan] = useState(null);


    // Récupère les informations de l'artisan sélectionné
  useEffect(() => {
    fetch(`http://localhost:3080/api/artisans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtisan(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);


  if (!artisan) {
    return (
      <main className="container py-5">
        <p>Chargement...</p>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>fiche détaillée artisan- Trouve ton artisan</title>
        <meta name="description" content="Consultez la fiche détaillée d'un artisan qualifié sur Trouve ton artisan."/>
      </Helmet>
    
    
    <main className="container">
      {/* Informations détaillées de l'artisan */}
      <section className="row  mb-5">
        <div className="col-12 col-lg-7">
         <h3 className="fw-bold mb-4">{artisan.Nom}</h3>

          <p className="mb-2 note-artisan">
              <span className="stars">
                {[1, 2, 3, 4, 5].map((star) => {
                      if (artisan.Note >= star) {
                      return <i key={star} className="bi bi-star-fill"></i>;
                }

                      if (artisan.Note >= star - 0.5) {
                      return <i key={star} className="bi bi-star-half"></i>;
                }

                      return <i key={star} className="bi bi-star"></i>;
                })}
              </span>
              {" "} {artisan.Note}/5
            </p>
            
            <p className="mb-2">
              <span className="artisan-detail-label">Spécialisation :</span>
                {" "}{artisan.Specialite?.Nom}
            </p>
            
            <p className="mb-2">
            <span className="artisan-detail-label">Localisation : </span>{" "}{artisan.Ville}
            </p>

            <div className="mb-2">
                <p className="artisan-detail-label mb-1">À propos :</p>
                <p className="a-propos-text">{artisan.A_propos}</p>
            </div>

              {artisan.Site_web && (
                <p className="mb-2">
                  <span className="artisan-detail-label">Site web :</span>{" "}
                    <a href={artisan.Site_web} target="_blank" rel="noreferrer" className="artisan-link" >Visiter le site</a>
                </p>
            )}
        </div>

        <div className="col-12 col-lg-5 text-center mt-4 mt-lg-0">
          <img src="/images/profil-artisan.png" alt={`profil ${artisan.Nom}`} className="img-fluid rounded shadow w-100"/>
        </div>
      </section>

      <section>
        {/* Formulaire de contact */}
          <h2 className="text-start fw-bold mb-4">Contactez l’artisan :</h2>
            <ContactForm artisan={artisan} />
      </section>
    </main>
    </>
  );
}

export default Details;