import { Helmet } from "react-helmet-async";

//page erreur 404

function Erreur404() {
  return (

    <>
      <Helmet>
        <title>Page non trouvée - Trouve ton artisan</title>
        <meta name="description" content="La page que vous recherchez n'existe pas"/>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
    <main>
      <div className="container-fluid px-5">
        <h3>Page non trouvée</h3>

        <div className="d-flex justify-content-center gap-4 mt-4 mb-4">
  <p className="erreur404-text m-5">
    ERREUR 404
  </p>

  <p className="erreur404-description m-5">
    La page que vous avez demandée n'existe pas.
  </p>
</div>

      <div className="d-flex justify-content-center">
        <img
          src="/images/icon-erreur404.png"
          alt="Erreur 404"
          className="img-fluid"
        />
      </div></div>
    </main>
    </>
  );
}

export default Erreur404;