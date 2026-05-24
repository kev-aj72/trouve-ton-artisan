import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3080/api/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Erreur fetch :", error));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">
                        Accueil
                    </Link>
                    {categories.map((c) => (
                        <Link
                            key={c.Id_categorie}
                            className="nav-link"
                            to={`/categorie/${c.Nom}`}
                        >
                            {c.Nom}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Menu;