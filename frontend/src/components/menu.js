import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recherche from "./recherche";

 // composant importer dans le composant header 
 // pour la création est la reutilisation du menu

function Menu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://trouve-ton-artisan-api-1g3f.onrender.com/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <nav className="navbar navbar-expand-xl p-0">

      <div className="container-fluid p-0">

        <button className="navbar-toggler ms-auto me-3" type="button" data-bs-toggle="collapse"
          data-bs-target="#menuArtisan" aria-controls="menuArtisan" aria-expanded="false" aria-label="Ouvrir le menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flex-column align-items-end" id="menuArtisan" >

          <div className="recherche-menu mt-3 mb-3 mx-xl-5">
            <Recherche />
          </div>

          <div className="navbar-nav flex-column flex-xl-row justify-content-between mt-3 w-100">

            <Link className="nav-link accueil-link" to="/">Accueil</Link>

            {categories.map((c) => (
              <Link key={c.Id_categorie} className="nav-link menu-link" to={`/categorie/${c.Nom}`}>
                        {c.Nom}</Link>
            ))}

          </div>
            <div className="d-lg-none text-center mt-4">
              <img src="/images/Logo.png" alt="Logo trouve ton artisan" className="img-fluid w-100"/>
            </div>
        </div>

      </div>

    </nav>
  );
}

export default Menu;