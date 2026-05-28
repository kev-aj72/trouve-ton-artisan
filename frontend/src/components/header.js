import { Link } from "react-router-dom";
import Menu from "./menu";

function Header() {
  return (
    <header className="container-fluid">

      <div className="row align-items-center">

        <div className="col-8 col-lg-6">
          <Link to="/">
            <img
              src="/images/Logo.png"
              alt="Logo trouve ton artisan"
              className="img-fluid"
            />
          </Link>
        </div>

        <div className="col-4 col-lg-6">
          <Menu />
        </div>

      </div>

    </header>
  );
}

export default Header;