const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1526816229784-65d5d54ac8bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />

        <div>
          <p>Domaine de Suscinio</p>
        </div>
      </section>

      <section className="introduction">
        <h2>Un château, des animations et une nature préservée</h2>

        <div className="separator"></div>

        <p>Patrimoine de Bretagne, le château de Suscinio est un incontournable du Golfe du Morbihan. Situé au milieu d'un parc naturel d'une richesse et d'une diversité d'activités rares, il propose une palette d'animations historiques unique... A quelques minutes à pieds de la plus belle plage.</p>
      </section>

      <section className="reservation">
        <button>Réserver un créneau</button>
      </section>

      <section className="events">
        <h2>Nos énigmes</h2>

        <div className="separator"></div>

        <div>
          <img src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

          <div className="text">
            <h3>La chambre des mystères au château de Suscinio</h3>

            <p>Enfermé dans une pièce secrète du château de Suscinio, partez à la chasse aux indices et résolvez les différentes énigmes pour vous échapper à temps de la chambre des mystères. Bon en arrière au XVIIIe siècle, à l’époque de la célèbre affaire du collier de la reine.
            Tout le royaume de France cherche les coupables. Le principal suspect est en prison, sur le point d’être jugé, lorsque vous recevez une lettre mystérieuse du prince de Condé, qui soupçonne la comtesse de la Motte d’avoir commandité l’escroquerie. Fouillez la chambre des mystères pour trouver des preuves qui innocenteront le suspect. Une véritable course contre le temps s’engage, à vous de jouer !</p>
          </div>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1463871181391-8550cd89c179?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />

          <div className="text">
            <h3>Guet-apens royal au château de Suscinio</h3>

            <p>Au château de Suscinio, faites un voyage au XVIe siècle pour vivre un évènement historique ! Vous devrez infiltrer les partisans du roi Henri III. Logique, esprit d’équipe et observation seront vos principales armes pour déjouer un guet-apens royal orchestré par le roi lui-même pour assassiner son principal rival, le duc de Guise.
            Parviendrez-vous à changer l’Histoire et à contrecarrer les plans du roi ? Vous aurez 60 minutes pour vivre un des évènements les plus marquants du château de Suscinio…</p>
          </div>
        </div>
      </section>

      <section className="reservation">
        <button>Réserver un créneau</button>
      </section>

      <section className="footer">
        <p>L'abus d'alcool est dangereux pour la santé, à consommer avec modération </p>

        <a>Mentions légales</a>

        <a>Politique de protection des données</a>
      </section>
    </div>
  )
}

export default Home;
