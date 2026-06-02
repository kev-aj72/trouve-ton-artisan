import { useState } from "react";

function ContactForm({ artisan }) {

    // Stocke les données saisies dans le formulaire
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });

  // Met à jour les champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   // Envoie les données au backend
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3080/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        emailArtisan: artisan.Email,
      }),
    });

    if (!res.ok) {
      throw new Error();
    }

     // Message de confirmation
    alert(`Message envoyé à ${artisan.Nom}`);

    setFormData({
      nom: "",
      email: "",
      objet: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Erreur lors de l'envoi.");
  }
};

  return (
    <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-8">
                {/* Formulaire de contact */}
                <form onSubmit={handleSubmit}>  
                  
                  {/* Champ nom utilisateur*/}
                  <div className="row align-items-center mb-3">
                    <label htmlFor="nom" className="col-12 col-md-2 form-label form-artisan-label mb-0">Nom:</label>
                      <div className="col-12 col-md-10">
                        <input type="text" id="nom" name="nom" className="form-control form-artisan" value={formData.nom}
                                onChange={handleChange} required />
                      </div>
                  </div>


                    {/* Champ adresse email de contact */}
                  <div className="row align-items-center mb-3">
                    <label htmlFor="email" className="col-12 col-md-2 form-label form-artisan-label mb-0">Email:</label>

                    <div className="col-12 col-md-10">
                      <input type="email" id="email" name="email" className="form-control form-artisan" value={formData.email} 
                              onChange={handleChange} required/>
                    </div>
                  </div>

                   {/* Champ objet de la demande */}
                  <div className="row align-items-center mb-3">
                    <label htmlFor="objet" className="col-12 col-md-2 form-label form-artisan-label mb-0">Objet:</label>

                    <div className="col-12 col-md-10">
                      <input type="text" id="objet" name="objet"className="form-control form-artisan" value={formData.objet}
                              onChange={handleChange} required/>
                    </div>
                  </div>

                    {/* Zone de texte destinéea au message */}
                  <div className="row mb-4">
                    <label htmlFor="message" className="col-12 col-md-2 form-label form-artisan-label">Message:</label>

                    <div className="col-12 col-md-10">
                      <textarea id="message" name="message" rows="5" className="form-control form-artisan" value={formData.message}
                                onChange={handleChange}required/>
                    </div>
                  </div>

                     {/* Bouton envoi des informations vers l'API */}
                  <div className="text-center">
                    <button type="submit" className="btn-submit">Contactez</button>
                  </div>
                </form>
              </div>
            </div>
  );
}

export default ContactForm;