import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Message envoyé à :", artisan.Email);
    console.log(formData);

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
        <h1>Chargement...</h1>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <section className="row align-items-center mb-5">
        <div className="col-12 col-lg-7">
          <h1 className="fw-bold mb-4">{artisan.Nom}</h1>

          <p className="mb-2">
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
            <strong>Spécialité :</strong> {artisan.Specialite?.Nom}
          </p>

          <p className="mb-2">
            <strong>Localisation :</strong> {artisan.Ville}
          </p>

      <div className="mb-2">
        <span className="fw-bold mb-3">À propos</span>

        <p>{artisan.A_propos}</p>
      </div>
          {artisan.Site_web && (
            <p className="mb-2">
              <strong>Site web :</strong>{" "}
              <a href={artisan.Site_web} target="_blank" rel="noreferrer">
                Visiter le site
              </a>
            </p>
          )}
        </div>

        <div className="col-12 col-lg-5 text-center mt-4 mt-lg-0">
          <img
            src="/images/profil-artisan.png"
            alt={`profil ${artisan.Nom}`}
            className="img-fluid rounded shadow w-100"
          />
        </div>
      </section>


      <section className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h2 className="text-center fw-bold mb-4">
            Contactez l’artisan :
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                className="form-control"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="objet" className="form-label">
                Objet
              </label>
              <input
                type="text"
                id="objet"
                name="objet"
                className="form-control"
                value={formData.objet}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn-submit">
                Contactez
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Details;