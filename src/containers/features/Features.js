import { Feature } from '../../components';
import './Features.css';

const Features = () => {
  const featuresData = [
    {
      title: 'Protégez ce qui compte vraiment',
      text: 'Avec Digital Électrique, sécurisez vos espaces résidentiels et professionnels grâce à des solutions fiables et personnalisées.',
    },

    {
      title: 'Des technologies avancées à votre service',
      text: 'Nous intégrons les dernières innovations en matière de sécurité, de vidéosurveillance et de domotique pour répondre à vos besoins.',
    },

    {
      title: 'Contrôle et tranquillité d’esprit',
      text: 'Gardez le contrôle de votre sécurité, où que vous soyez, grâce à des systèmes connectés et faciles à utiliser.',
    },

    {
      title: 'Des solutions durables et efficaces',
      text: 'Faites confiance à des équipements performants et robustes, conçus pour durer et garantir votre sérénité.',
    },
  ];

  return (
    <section className='section features'>
      <div className='section-center features__center'>
        <div className='features__heading'>
          <h1 className='gradient__text'>
          Faites le choix d’un futur plus sûr avec Digital Électrique.
          </h1>
          <p>"Qu'attendez-vous ? Contactez-nous dès maintenant pour bénéficier d'une sécurité optimale et d'une tranquillité d'esprit."</p>
        </div>

        <div className='features__container'>
          {featuresData.map((feature, index) => (
            <Feature {...feature} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
