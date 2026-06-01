import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  // Récupère l'identifiant de l'artisan dans l'URL
  const { id } = useParams();

  // Stocke les informations de l'artisan
  const [artisan, setArtisan] = useState(null);

  // Stocke les données du formulaire de contact
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });

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

    // Met à jour les champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // Gère l'envoi du formulaire de contact
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Votre message a bien été envoyé.");

    setFormData({
      nom: "",
      email: "",
      objet: "",
      message: "",
    });
  };

  if (!artisan) {
    return (
      <main className="container py-5">
        <p>Chargement...</p>
      </main>
    );
  }

  return (

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

            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-8">
                <form onSubmit={handleSubmit}>
                  <div className="row align-items-center mb-3">
                    <label htmlFor="nom" className="col-12 col-md-2 form-label form-artisan-label mb-0">Nom:</label>

                      <div className="col-12 col-md-10">
                        <input type="text" id="nom" name="nom" className="form-control form-artisan" value={formData.nom}
                                onChange={handleChange} required />
                      </div>
                  </div>

                  <div className="row align-items-center mb-3">
                    <label htmlFor="email" className="col-12 col-md-2 form-label form-artisan-label mb-0">Email:</label>

                    <div className="col-12 col-md-10">
                      <input type="email" id="email" name="email" className="form-control form-artisan" value={formData.email} 
                              onChange={handleChange} required/>
                    </div>
                  </div>

                  <div className="row align-items-center mb-3">
                    <label htmlFor="objet" className="col-12 col-md-2 form-label form-artisan-label mb-0">Objet:</label>

                    <div className="col-12 col-md-10">
                      <input type="text" id="objet" name="objet"className="form-control form-artisan" value={formData.objet}
                              onChange={handleChange} required/>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <label htmlFor="message" className="col-12 col-md-2 form-label form-artisan-label">Message:</label>

                    <div className="col-12 col-md-10">
                      <textarea id="message" name="message" rows="5" className="form-control form-artisan" value={formData.message}
                                onChange={handleChange}required/>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn-submit">Contactez</button>
                  </div>
                </form>
              </div>
            </div>
      </section>
    </main>
  );
}

export default Details;