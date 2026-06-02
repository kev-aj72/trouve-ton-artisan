// Simule l'envoi d'un email à un artisan

exports.sendMail = async (
  emailArtisan,
  nom,
  email,
  objet,
  message
) => {

  console.log("=== NOUVEAU MESSAGE ===");
  console.log("Destinataire :", emailArtisan);
  console.log("Nom :", nom);
  console.log("Email :", email);
  console.log("Objet :", objet);
  console.log("Message :", message);

  return true;
};