import { useRouter } from 'next/router';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();

  const navigateToEscapeGame = (slug) => {
    router.push(`/enigme/${slug}`);
  };

  return (
    <div className="container">
      <section className="hero">
        <img src="https://www.tourismebretagne.com/app/uploads/crt-bretagne/2018/11/suscinio-et-la-presqu-ile-de-rhuys-5-1920x960-crop-1542114215.jpg" />

        <div>
          <p>Domaine de Suscinio</p>
        </div>
      </section>

      <section className="reservation">
        <h3>Suscinio: le domaine des ducs de Bretagne</h3>

        <div className="separator"></div>
      </section>

      <section className="introduction">
        <p>Patrimoine de Bretagne, le château de Suscinio est un incontournable du Golfe du Morbihan. Situé au milieu d'un parc naturel d'une richesse et d'une diversité d'activités rares, il propose une palette d'animations historiques unique... A quelques minutes à pieds de la plus belle plage.</p>
      </section>

      <section className="presentation">
        <img src="https://www.suscinio.fr/wp-content/uploads/sites/37/2020/03/rabouan_XT22102.jpg" />

        <p>C’est dans un environnement magnifique, sur la presqu’île de Rhuys, au bord de la mer, au milieu d’Espaces Naturels Sensibles que s’élance l’énigmatique château de Suscinio.  Prieuré au XIIIe siècle, autour duquel s’est développé un domaine agricole, il s’agrandit sous l’impulsion des Ducs de Bretagne qui y implantent un premier manoir.
        Remanié et agrandi, il deviendra le relais de chasse favori des têtes couronnées. Classé Monument Historique par Prosper Mérimée en 1840, il est aujourd’hui la propriété du Département du Morbihan qui assure sa restauration depuis plus de 50 ans.</p>
      </section>

      <p className="introduction-next">Le château de Suscinio, résidence des ducs de Bretagne, se dresse au bord de la mer dans la commune de Sarzeau (Morbihan), au cœur de ce qui était autrefois un vaste espace boisé. Construit à la fin du Moyen Âge, il est situé dans la presqu'île de Rhuys, aujourd'hui formé de marais salants et de prairies. Le château s’inscrit dans la lignée des grandes résidences ducales émergeant alors en Bretagne sous l’impulsion de ducs puissants.
      Longtemps laissé à l’état de ruine, le château est finalement classé en 1840 après la visite de Prosper Mérimée, cinq ans plus tôt, qui le met sur la première liste des Monuments historiques. À l’époque, le château est visité pour le caractère romantique de ses ruines.</p>

      <section className="reservation">
        <h3>Découvrez nos escapes game !</h3>

        <div className="separator"></div>
      </section>

      <section className="events">
        <div>
          <img src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />

          <div className="text">
            <h3>La chambre des mystères au château de Suscinio</h3>

            <p>Enfermé dans une pièce secrète du château de Suscinio, partez à la chasse aux indices et résolvez les différentes énigmes pour vous échapper à temps de la chambre des mystères. Bon en arrière au XVIIIe siècle, à l’époque de la célèbre affaire du collier de la reine.
            Tout le royaume de France cherche les coupables. Le principal suspect est en prison, sur le point d’être jugé, lorsque vous recevez une lettre mystérieuse du prince de Condé, qui soupçonne la comtesse de la Motte d’avoir commandité l’escroquerie. Fouillez la chambre des mystères pour trouver des preuves qui innocenteront le suspect. Une véritable course contre le temps s’engage, à vous de jouer !</p>
            
            <Link href="/enigme/chambre-des-mysteres">
              <a>Home</a>
            </Link>

            <button type="button" onClick={() => navigateToEscapeGame('chambre-des-mysteres')}>En savoir plus</button>
          </div>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1463871181391-8550cd89c179?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />

          <div className="text">
            <h3>Guet-apens royal au château de Suscinio</h3>

            <p>Au château de Suscinio, faites un voyage au XVIe siècle pour vivre un évènement historique ! Vous devrez infiltrer les partisans du roi Henri III. Logique, esprit d’équipe et observation seront vos principales armes pour déjouer un guet-apens royal orchestré par le roi lui-même pour assassiner son principal rival, le duc de Guise.
            Parviendrez-vous à changer l’Histoire et à contrecarrer les plans du roi ? Vous aurez 60 minutes pour vivre un des évènements les plus marquants du château de Suscinio…</p>

            <button type="button" onClick={() => navigateToEscapeGame('guet-apens-royal')}>En savoir plus</button>
          </div>
        </div>
      </section>

      <section className="reservation">
        <h3>Nous contacter</h3>

        <div className="separator"></div>
      </section>

      <section className="contact">
        <h3>Accès</h3>

        <p>Domaine de Suscinio</p>
        <p>Route du Duc Jean V</p>
        <p>56370 Sarzeau, Presqu’île de Rhuys, Bretagne, France</p>
        <p>Tél. 02 97 41 91 91</p>

        <h3>Horaires et ouvertures</h3>

        <p>– Vacances de Noël 10h-17h</p>
        <p>– Du 8 janvier au 9 février et du 13 novembre au 25 décembre 14h-17h</p>
        <p>– Du 10 février au 31 mars et du 1er octobre au 12 novembre 10h-18h</p>
        <p>– Avril, mai, juin et septembre 10h-19h</p>
        <p>– Juillet et Août 10h-20h</p>
        <p>Le soir, la billetterie ferme 1 heure avant la fermeture du château. Tous les espaces du château n’étant pas chauffés, prévoyez des vêtements bien chauds</p>
      </section>

      <section className="footer">
        <p>© Copyright - Le domaine de Suscinio - Un site Internet réalisé par <a target="_blank" href="https://www.mediafactory.fr/">Mediafactory</a></p>

        <a>Mentions légales</a>

        <a>Politique de protection des données</a>
      </section>
    </div>
  )
}

export default Home;
