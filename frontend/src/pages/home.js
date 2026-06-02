import { Helmet } from "react-helmet-async";
import Top from "../components/top";

function Home() {
    return(
      <>
      <Helmet>
        <title>Trouve ton artisan - Accueil</title>
        <meta name="description" content="Trouvez facilement un artisan qualifié près de chez vous dans les domaines du bâtiment, de l'alimentation, des services et de la fabrication."/>
      </Helmet>

    <main>
      {/* Section de présentation du fonctionnement du site */}
        <section>

          <div className="text-center">
            <h1 className="fw-bold mb-5">Trouve ton artisan</h1>
          </div>

          <div className="row mb-5 align-items-stretch">
            <div className="art1 col-12 col-lg-6 py-5">

              <h2 className="mx-5 text-start">Comment trouver mon artisan ?</h2>

              <ul className="list-unstyled">
                <li className="fs-3 m-5"><i className="bi bi-1-circle-fill m-2"></i>
                    Choisir la catégorie d’artisanat dans le menu.</li>

                <li className="fs-3 m-5"><i className="bi bi-2-circle-fill m-2"></i>
                    Choisir un artisan.</li>

                <li className="fs-3 m-5"><i className="bi bi-3-circle-fill m-2"></i>
                    Le contacter via le formulaire de contact.</li>

                <li className="fs-3 m-5"><i className="bi bi-4-circle-fill m-2"></i>
                    Une réponse sera apportée sous 48h.</li>
              </ul>
            </div>

            <div className="col-12 col-lg-6 px-5">
              <img src="/images/image-page-home.png" alt="Artisanat"
                    className="home-img img-fluid w-100 h-100 rounded shadow"/>
            </div>
          </div>

        </section>

            {/* Section des trois artisans du mois */}
        <section>

          <h2 className="fw-bold m-5">Les trois artisans du mois</h2>

            <div className="row g-4 m-5">
              <Top />
            </div>
        </section>

    </main>
    </>
  );
}

export default Home;