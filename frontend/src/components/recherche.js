import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Recherche() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (search.trim() === "") {
            setResults([]);
            return;
        }

        fetch("http://localhost:3080/api/artisans")
            .then((response) => response.json())
            .then((data) => {
                const filtered = data.filter((artisan) =>
                    artisan.Nom.toLowerCase().includes(search.toLowerCase())
                );

                setResults(filtered);
            })
            .catch((error) => console.error("Erreur recherche :", error));
    }, [search]);

    return (
    <div className="dropdown w-100">
        <input
            className="form-control"
            type="search"
            placeholder="Rechercher un artisan"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        {results.length > 0 && (
            <div className="dropdown-menu show w-100">
                {results.map((artisan) => (
                    <Link
                        key={artisan.Id_artisan}
                        to={`/artisans/${artisan.Id_artisan}`}
                        className="dropdown-item"
                        onClick={() => {
                            setSearch("");
                            setResults([]);
                        }}
                    >
                        {artisan.Nom}
                    </Link>
                ))}
            </div>
        )}
    </div>
);
}

export default Recherche;