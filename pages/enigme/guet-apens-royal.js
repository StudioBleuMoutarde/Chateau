import React from 'react';

const GuetApens = () => {
  return (
    <div className="container">
      <section className="hero">
        <img src="https://images.unsplash.com/photo-1463871181391-8550cd89c179?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />

        <div>
          <p>Guet-apens royal au château de Suscinio</p>
        </div>
      </section>

      <section className="slug-description">
        <img src="https://images.unsplash.com/photo-1531777319985-9dca28eeae64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1923&q=80" />

        <p>Au château de Suscinio, faites un voyage au XVIe siècle pour vivre un évènement historique ! Vous devrez infiltrer les partisans du roi Henri III. Logique, esprit d’équipe et observation seront vos principales armes pour déjouer un guet-apens royal orchestré par le roi lui-même pour assassiner son principal rival, le duc de Guise.
        Parviendrez-vous à changer l’Histoire et à contrecarrer les plans du roi ? Vous aurez 60 minutes pour vivre un des évènements les plus marquants du château de Suscinio…</p>
      </section>

      <section className="reservation">
        <h3>Plus de détails</h3>

        <div className="separator"></div>
      </section>

      <section className="contact">
        <h3>Quand ?</h3>
        <p>Toute l'année. Les mercredis, jeudi et vendredi uniquement. Et tous les jours pendant les vacances scolaires.</p>

        <h3>Difficulté ?</h3>
        <p>Débutant - Intermédiaire</p>

        <h3>Nombre de personnes ?</h3>
        <p>6 à 10 personnes</p>

        <h3>Temps ?</h3>
        <p>45 à 60 minutes</p>

        <h3>Tarifs ?</h3>
        <p>18€ par personne</p>
      </section>

      <section className="footer">
        <p>© Copyright - Le domaine de Suscinio - Un site Internet réalisé par <a target="_blank" href="https://www.mediafactory.fr/">Mediafactory</a></p>

        <a>Mentions légales</a>

        <a>Politique de protection des données</a>
      </section>
    </div>
  )
}

export default GuetApens;
