import peopleIcon from '../../assets/people.png';
import homecam from '../../assets/homecam.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header' id='Accueil'>
      <div className='section-center header__center'>
        {/* header left */}
        <div className='header__left'>
          <h1 className='gradient__text'>
          Votre Sécurité C’est Notre Métier
          </h1>
          <p>
          Chez Digital Électrique, protégez ce qui compte vraiment grâce à des solutions fiables, innovantes et personnalisées.        
          Nos systèmes sont conçus pour vous offrir une protection totale et une sérénité durable.
          Optez pour des systèmes d'alarme avancés, des caméras de surveillance intelligentes et une domotique connectée. Ensemble, construisons un environnement plus sûr, où chaque détail est pensé pour votre bien-être.
          </p>
         

          <div className='header__leftPeople'>
            <img src={peopleIcon} alt='people' />
            <p>14 personnes ont visité ce site au cours des dernières 24 heures.</p>
          </div>
        </div>

        {/* header right */}
        <div className='header__right'>
          <img src={homecam} alt='ai pic' />
        </div>
      </div>
    </div>
  );
};

export default Header;
