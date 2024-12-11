import possibilityImage from '../../assets/possibility.png';
import './Possibility.css';

const Possibility = () => {
  return (
    <section className='section possibility' id='possibility'>
      <div className='section-center possibility__center'>
        <article className='possibility__left'>
        <img src={possibilityImage} alt='possibility pic' />
        </article>

        <article className='possibility__right'>
          <h1 className='gradient__text'>
            Les possibilités sont infinies avec un système de sécurité sur mesure
          </h1>
          <p>
            Offrez à votre maison ou entreprise la protection qu'elle mérite grâce à nos installations de systèmes de sécurité haut de gamme. Que ce soit pour un système de vidéosurveillance, des alarmes ou des solutions de contrôle d'accès, nous garantissons des installations professionnelles et adaptées à vos besoins. Bénéficiez d'une sécurité renforcée pour votre tranquillité d'esprit, tout en profitant de la technologie de pointe pour une surveillance constante et fiable.
          </p>
          <h4>Contactez-nous</h4>
        </article>
      </div>
    </section>
  );
};

export default Possibility;
