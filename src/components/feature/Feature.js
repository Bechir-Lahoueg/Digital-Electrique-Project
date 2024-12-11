import './Feature.css';

const Feature = ({ title, text, big }) => {
  console.log(big);
  return (
    <article className={`feature ${big && 'big'}`}>
      <div className='feature__title'>
        <div />
        <h1>{title}</h1>
      </div>

      <div className='feature__container'>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Feature;
