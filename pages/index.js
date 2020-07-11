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
          <img src="https://images.unsplash.com/photo-1568664190428-0817708dbc99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1463871181391-8550cd89c179?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />

          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
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
