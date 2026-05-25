import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Top() {
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3080/api/artisans/top")
            .then((response) => response.json())
            .then((data) => setArtisans(data))
            .catch((error) => console.error(error));
    }, []);

    return (
                <div className="row">
                    {artisans.map((artisan) => (
                        <div className="col-md-4" key={artisan.Id_artisan}>
                             <Link
        to={`/artisans/${artisan.Id_artisan}`}
        className="text-decoration-none text-dark"
    >
                            <div className="card h-100">
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {artisan.Nom}
                                    </h3>

                                    <p className="card-text">
                                        Note : {artisan.Note} / 5
                                    </p>

                                    <p className="card-text">
                                        Spécialité : {artisan.Specialite.Nom}
                                    </p>

                                    <p className="card-text">
                                        Ville : {artisan.Ville}
                                    </p>
                        
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>
    );
}

export default Top;