const contactService = require("../services/contact");

// Contrôle l'envoi du formulaire de contact vers un artisan.
// Route : POST /api/contact

exports.sendMail = async (req, res) => {
  const { emailArtisan, nom, email, objet, message } = req.body;

  if (!emailArtisan || !nom || !email || !objet || !message) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires", });
  }

  try {
    await contactService.sendContactMail(emailArtisan, nom, email, objet, message);

    res.status(200).json({ message: "Email envoyé avec succès", });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Erreur lors de l'envoi de l'email", });
  }
};