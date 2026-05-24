 import { Link } from "react-router-dom";
 
 function Footer () {
    return (
        <footer>
        <div>
            <address>
                <p>LYON</p>
                <p>101 cours Charlemagne</p>
                <p>CS 20033</p>
                <p>69269 LYON CEDEX 02</p>
                <p>France</p>
                <p>+33 (0)4 26 73 40 00</p>
            </address>
        </div>
        <div className="footer-nav">
        <div className="nav justify-content-center"> 
    <Link className="nav-link" to="/mentions-legales">mentions légales</Link>
    <Link className="nav-link" to="/donnees-personnelles">données personnelles</Link>
    <Link className="nav-link" to="/accessibilite">accessibilité</Link>
    <Link className="nav-link" to="/cookies">cookies</Link>
</div>
</div>
</footer>
    )
 }

 export default Footer;