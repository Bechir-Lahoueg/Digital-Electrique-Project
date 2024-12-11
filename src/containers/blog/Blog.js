import { Article } from '../../components';
import image1 from '../../assets/blog01.jpg';
import image2 from '../../assets/blog02.jpg';
import image3 from '../../assets/blog03.jpg';
import image4 from '../../assets/blog04.jpg';
import image5 from '../../assets/blog05.png';
import image6 from '../../assets/blog06.jpg';

import './Blog.css';

const Blog = () => {
  return (
    <section className='section blog' id='services'>
      <div className='section-center blog__center'>
        <div className='blog__heading'>
          <h1 className='gradient__text'>Services</h1>
        </div>

        <div className='blog__container'>
          <div className='blog__containerLeft'>
            <Article
              imgUrl={image1}
              date={<h3>Télésurveillance</h3>}
              title={<h4>Pour garder un oeil sur votre domicile ou entreprise peu importe où vous êtes</h4>}
            />
          </div>
          
          <div className='blog__containerRight'>
          <Article
              imgUrl={image4}
              date={<h3>Alarme</h3>}
              title={<h4>Pour une protection constante 24h/24 et 7j/7 de votre domicile ou entreprise</h4>}
            />
            
            <Article
              imgUrl={image5}
              date={<h3>Contrôle d'accès</h3>}
              title={<h4>Pour contrôler les permissions d'accès et avoir un historique des mouvements</h4>}
            />
            <Article
              imgUrl={image2}
              date={<h3>Détection d'incendie</h3>}
              title={<h4>Pour gérer les risques efficacement et réduire au minimum les incidents.</h4>}
            />
            <Article
              imgUrl={image3}
              date={<h3>Domotique</h3>}
              title={<h4>Pour un espace de vie à la fine pointe de la technologie</h4>}
            />
            
            <Article
              imgUrl={image6}
              date={<h3>Réseautique</h3>}
              title={<h4>Pour des installations réseaux fiables et bien pensées</h4>}
            />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
