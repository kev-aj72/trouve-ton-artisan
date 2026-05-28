import Top from "../components/top";

function Home() {
    return(

    <main>
            <section className="text-center mb-5">
  <div className="titre-ligne mx-auto mb-3"></div>

  <h1 className="fw-bold">
    Trouve ton artisan
  </h1>
</section>

<section className="row g-5 mb-5 align-items-start">
  <div className="col-12 col-lg-6 p-0">

    <div className="titre-ligne mb-3"></div>

    <h2 className="fw-bold mx-5">
      Comment trouver mon artisan ?
    </h2>

    <ul className="list-unstyled">
      <li className="fs-3 m-5"><i className="bi bi-1-circle-fill m-2"></i>Choisir la catégorie d’artisanat dans le menu.</li>
      <li className="fs-3 m-5 "><i className="bi bi-2-circle-fill m-2"></i>Choisir un artisan.</li>
      <li className="fs-3 m-5 "><i className="bi bi-3-circle-fill m-2"></i>Le contacter via le formulaire de contact.</li>
      <li className="fs-3 m-5 "><i className="bi bi-4-circle-fill m-2"></i>Une réponse sera apportée sous 48h.</li>
    </ul>

  </div>

  <div className="col-12 col-lg-6 text-center w-50 px-5 ">
    <img
      src="/images/image-page-home.png"
      alt="Artisanat"
      className="img-fluid w-100 rounded shadow"
    />
  </div>
</section>

<section>
  <div className="titre-ligne mb-3"></div>

  <h2 className="fw-bold m-5">
    Les trois artisans du mois
  </h2>

  <div className="row g-4 m-5">
    <Top />
  </div>
</section>

    </main>
    );
}

export default Home;