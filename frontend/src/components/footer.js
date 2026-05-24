import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="d-flex flex-column w-100">

            <div className="d-flex justify-content-center border-bottom">

                <address className="text-center p-2 ">

                    <p className="ad-items m-0 ">LYON</p>
                    <p className="ad-items m-0 ">101 cours Charlemagne</p>
                    <p className="ad-items m-0 ">CS 20033</p>
                    <p className="ad-items m-0 ">69269 LYON CEDEX 02</p>
                    <p className="ad-items m-0 ">France</p>
                    <p className="ad-items m-0 ">+33 (0)4 26 73 40 00</p>

                </address>

            </div>


            <div className="d-flex justify-content-around w-100 mt-3">

                <Link className="nav-link" to="/mentions-legales">
                    mentions légales
                </Link>

                <Link className="nav-link" to="/donnees-personnelles">
                    données personnelles
                </Link>

                <Link className="nav-link" to="/accessibilite">
                    accessibilité
                </Link>

                <Link className="nav-link" to="/cookies">
                    cookies
                </Link>

            </div>

        </footer>

    );

}

export default Footer;