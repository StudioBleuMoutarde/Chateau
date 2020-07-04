const Home = () => {
  return (
    <div>
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

        <p>Oserez-vous pénétrez dans le chateau ?</p>
      </section>

      <section className="introduction">
        <h3>Forteresse sanglante de Chinon</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>

      <section className="reservation">
        <button>Réserver</button>
      </section>

      <section className="events">
        <h3>Nos énigmes</h3>

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
        <button>Réserver</button>
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
