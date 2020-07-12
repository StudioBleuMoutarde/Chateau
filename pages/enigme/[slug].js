import { useRouter } from 'next/router';
import React from 'react';

const Enigma = () => {
  const router = useRouter();

  return (
    <div className="container">
      <section className="hero">
        {router.query.slug === 'chambre-des-mysteres' ? (
          <img src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
        ) : (
          <img src="https://images.unsplash.com/photo-1463871181391-8550cd89c179?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
        )}

        <div>
          {router.query.slug === 'chambre-des-mysteres' ? (
            <p>La chambre des mystères au château de Suscinio</p>
          ) : (
            <p>Guet-apens royal au château de Suscinio</p>
          )}
        </div>
      </section>

      {router.query.slug === 'chambre-des-mysteres' ? (
        <section className="slug-description">
          <img src="https://images.unsplash.com/photo-1435265796918-0e3d3e4af435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80" />

          <p>Enfermé dans une pièce secrète du château de Suscinio, partez à la chasse aux indices et résolvez les différentes énigmes pour vous échapper à temps de la chambre des mystères. Bon en arrière au XVIIIe siècle, à l’époque de la célèbre affaire du collier de la reine.
          Tout le royaume de France cherche les coupables. Le principal suspect est en prison, sur le point d’être jugé, lorsque vous recevez une lettre mystérieuse du prince de Condé, qui soupçonne la comtesse de la Motte d’avoir commandité l’escroquerie. Fouillez la chambre des mystères pour trouver des preuves qui innocenteront le suspect. Une véritable course contre le temps s’engage, à vous de jouer !</p>
        </section>
      ) : (
        <section className="slug-description">
          <img src="https://images.unsplash.com/photo-1531777319985-9dca28eeae64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1923&q=80" />

          <p>Au château de Suscinio, faites un voyage au XVIe siècle pour vivre un évènement historique ! Vous devrez infiltrer les partisans du roi Henri III. Logique, esprit d’équipe et observation seront vos principales armes pour déjouer un guet-apens royal orchestré par le roi lui-même pour assassiner son principal rival, le duc de Guise.
          Parviendrez-vous à changer l’Histoire et à contrecarrer les plans du roi ? Vous aurez 60 minutes pour vivre un des évènements les plus marquants du château de Suscinio…</p>
        </section>
      )}

      <section className="reservation">
        <h3>Plus de détails</h3>

        <div className="separator"></div>
      </section>

      {router.query.slug === 'chambre-des-mysteres' ? (
        <section className="contact">
          <h3>Quand ?</h3>
          <p>Toute l'année</p>

          <h3>Difficulté ?</h3>
          <p>Intermédiaire</p>

          <h3>Nombre de personnes ?</h3>
          <p>4 à 6 personnes</p>

          <h3>Temps ?</h3>
          <p>45 à 60 minutes</p>

          <h3>Tarifs ?</h3>
          <p>20€ par personne</p>
        </section>
      ) : (
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
      )}

      <section className="footer">
        <p>© Copyright - Le domaine de Suscinio - Un site Internet réalisé par <a target="_blank" href="https://www.mediafactory.fr/">Mediafactory</a></p>

        <a>Mentions légales</a>

        <a>Politique de protection des données</a>
      </section>
    </div>
  )
}

export default Enigma;
