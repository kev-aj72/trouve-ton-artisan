import { Helmet } from "react-helmet-async";

//page de mise en attente de construction lien footer

function Construction() {
  return (
     <>
      <Helmet>
        <title>Page en construction - Trouve ton artisan</title>
          <meta name="description" content="Cette page est actuellement en cours de construction."/>
          <meta name="robots" content="noindex, nofollow" />
      </Helmet>

    <main className="container-fluid px-5">
      <div>
        <h3>Page en attente de construction</h3>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <img src="/images/icon-en-construction.png" alt="Page en cours de construction" className="img-fluid"/>
      </div>
    </main>
    </>
  );
}

export default Construction;