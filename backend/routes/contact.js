const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contact");

// Route permettant l'envoi d'un email à un artisan
router.post("/", contactController.sendMail);

module.exports = router;