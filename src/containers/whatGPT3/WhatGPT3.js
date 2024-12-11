import { Feature } from '../../components';
import './WhatGPT3.css';

const WhatGPT3 = () => {
  return (
    <section className='whatgpt3' id='whatgpt3'>
      <div className='section-center whatgpt3__center'>
        <Feature
          big
          title='Qui sommes-nous ?'
          text='Chez Digital Électrique, nous sommes spécialisés dans l’installation de systèmes de sécurité innovants et fiables. Avec notre expertise, nous protégeons vos espaces résidentiels et professionnels pour vous offrir une tranquillité d’esprit totale.'
        />

        <div className='whatgpt__heading'>
          <h1 className='gradient__text'>
            Des solutions de sécurité au-delà de vos attentes
          </h1>

          <p>Découvrez notre expertise</p>
        </div>

        <div className='whatgpt3__container'>
          <Feature
            title='Systèmes d’alarme'
            text='Des systèmes d’alarme avancés pour une protection complète de vos biens et de vos proches.'
          />
          <Feature
            title='Vidéosurveillance'
            text='Des caméras de surveillance haute définition pour une sécurité en temps réel et un contrôle total.'
          />
          <Feature
            title='Domotique et contrôle d’accès'
            text='Des solutions connectées et personnalisées pour simplifier votre quotidien tout en garantissant votre sécurité.'
          />
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
