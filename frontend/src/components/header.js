import { Link } from "react-router-dom";
import Menu from "./menu";

function Header() {
    return (
        <header className="d-flex flex-row align-items-center justify-content-between w-100">

            <div className="col-5">

                    <Link to="/">
                        <img
                            src="/images/Logo.png"
                            alt="Logo trouve ton artisan"
                            className="col-12"
                        />
                    </Link>
                </div>

                <div className=" col-6 d-flex flex-column align-items-end p-4">

                <div className="w-50 mx-5">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Rechercher un artisan"
                        aria-label="Rechercher un artisan"
                    />
                </div>

            

            <div className="w-100 mt-3">
                
                    <Menu />
                
            </div>
            </div>

        </header>
    );
}

export default Header;