import './Article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <article className='article'>
      <div className='article__container'>
        <div className='article__img'>
          <img src={imgUrl} alt='blog pic' />
        </div>

        <div className='article__content'>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
      </div>
      <p>Read Full Article</p>
    </article>
  );
};

export default Article;
