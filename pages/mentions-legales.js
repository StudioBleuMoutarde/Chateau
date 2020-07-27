import React from 'react';
import Link from 'next/link';

const Legals = () => {
  return (
    <div className="container">
      <section className="header">
        <Link  href="/">
          <img src="https://mf-prod.com/suscinio/wp-content/uploads/sites/37/2020/03/logo-suscinio-noir-ok8.png" />
        </Link>

        <p>Le domaine de Suscinio : un château, des animations et une nature préservée</p>
      </section>

      <section className="hero">
        <img src="https://static.lpnt.fr/images/2019/07/26/19153140lpw-19155705-libre-jpg_6388250.jpg" />
      </section>

      <section className="reservation">
        <h3>Mentions légales</h3>

        <div className="separator"></div>
      </section>

      <section className="contact">
        <p>Déclaration Commission Nationale Informatique et Libertés Conformément à la loi Informatique et Libertés relative à l’informatique, aux fichiers et aux libertés et à l’article 43 de la loi du 30 septembre 1986 modifiée, ce site web a fait l’objet d’une déclaration de traitement automatisé d’informations nominatives auprès de la Commission Nationale Informatique et Libertés (CNIL), qui en a délivré récépissé sous le numéro 1988357 en date du 05/09/2016.</p>

        <br />

        <p>Le Château des Énigmes est une marque déposée auprès de l’INPI. Merci de respecter la législation sur le copyright et les droits d’auteur car toute utilisation de cette marque pour un usage commercial sera sanctionnée de poursuites. Ce site et son contenu: logo, charte graphique, texte, photos sont protégés par la loi du 11 mars 1957. Toute représentation ou reproduction, intégrale ou partielle, faite sans le consentement de Le Château des Énigmes, est illicite (alinéa premier de l’article 40). Cette représentation ou reproduction, par quelque procédé que ce soit, constituerait donc une contrefaçon sanctionnée par les articles 425 et suivants de l’ancien Code Pénal. Il est formellement interdit d’utiliser une photo extraite de ce site sur un autre site Internet ou tout autre support. Toutes les photographies du site sont protégées par des droits d’auteurs. Sans l’avis et l’accord de l’auteur, aucune autorisation de diffusion n’est permise.</p>

        <br />

        <p>La société SASU Casteth et Enigmes ne sera en aucun cas tenue responsable des informations diverses proposées par les sites à travers lesquels des liens hypertextes ont été réalisés. La société SASU Casteth et Enigmes se dégage de toute responsabilité relative aux différents sites dont les informations ne seraient pas conformes aux règles en vigueur et dispositions légales.</p>
      </section>

      <section className="footer">
        <p>© Copyright - Le domaine de Suscinio - Un site Internet réalisé par <a target="_blank" href="https://www.mediafactory.fr/">Mediafactory</a></p>

        <Link href="/mentions-legales">
          Mentions légales
        </Link>
      </section>
    </div>
  )
}

export default Legals;
