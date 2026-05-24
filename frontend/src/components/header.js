import { Link } from "react-router-dom";
import Menu from "./menu";

function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src="/images/Logo.png" alt="Logo trouve ton artisan" />
                </Link>
            </div>

            <div className="navbar bg-body-tertiary">
                <div className="container-fluid d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Rechercher un artisan"
                        aria-label="Rechercher un artisan"
                    />
                </div>
            </div>

            <Menu />
        </header>
    );
}

export default Header;