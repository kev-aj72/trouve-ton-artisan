function Erreur404() {
  return (
    <main>
      <div className="container-fluid px-5">
        <h2>Page non trouvée</h2>

        <div className="d-flex justify-content-center gap-4 mt-4 mb-4">
          <p className="fw-bold m-5">
            ERREUR 404
          </p>

          <p className="m-5">
            La page que vous avez demandée n'existe pas.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <img
          src="/images/icon-erreur404.png"
          alt="Erreur 404"
          className="img-fluid"
        />
      </div>
    </main>
  );
}

export default Erreur404;