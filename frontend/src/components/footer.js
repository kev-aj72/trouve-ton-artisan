import { Link } from "react-router-dom";

 // composant pour la création est la reutilisation du footer

function Footer() {
  return (
    <footer className="w-100 mt-5">
      <div className="d-flex justify-content-center border-bottom">
        <address className="text-center p-3 m-0">
          <p className="ad-items m-0">LYON</p>
          <p className="ad-items m-0">101 cours Charlemagne</p>
          <p className="ad-items m-0">CS 20033</p>
          <p className="ad-items m-0">69269 LYON CEDEX 02</p>
          <p className="ad-items m-0">France</p>
          <p className="ad-items m-0">+33 (0)4 26 73 40 00</p>
        </address>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center gap-3 w-100 p-3">
        <Link className="nav" to="/mentions-legales"> Mentions légales </Link>
        <Link className="nav" to="/donnees-personnelles">Données personnelles </Link>
        <Link className="nav" to="/accessibilite">Accessibilité </Link>
        <Link className="nav" to="/cookies">Cookies </Link>
      </div>
    </footer>
  );
}

export default Footer;