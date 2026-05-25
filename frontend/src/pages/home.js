import Top from "../components/top";


function Home() {
    return(

    <main>
            <h1>Trouve ton artisan</h1>
        
        <section>
            <article>
            <h2> Comment trouver mon artisan ?</h2>
            <ol>
            <li>Choisir la catégorie d’artisanat dans le menu.</li>   
            <li>Choisir un artisan.</li>
            <li>Le contacter via le formulaire de contact.</li>
            <li> Une réponse sera apportée sous 48h.</li>
            </ol>
            </article>

            <article>
                <img src="/images/image-page-home.png" alt="differente categorie des metier de l'artisanat"></img>
            </article>
        </section>

        <section>
            <h2>Les trois artisans du mois</h2>

            <div><Top /></div>

        </section>

    </main>
    );
}

export default Home;