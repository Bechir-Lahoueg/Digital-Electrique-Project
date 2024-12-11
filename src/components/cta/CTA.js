import { useState } from 'react';
import './CTA.css';

const testimonials = [
  {
    text: "Vivant a l'étranger, nous avons l'esprit tranquille sachant qu'une Centrale veille 24h/24h sur notre résidence secondaire. !",
    name: "Sarra. S"
  },
  {
    text: "Installation rapide et professionnelle. Nous nous sentons en sécurité 24/7.",
    name: "Mohamed R."
  },
  {
    text: "Vivant a l'étranger, nous avons l'esprit tranquille sachant qu'une Centrale veille 24h/24h sur notre résidence secondaire.",
    name: "Hamdi T."
  },
];

const CTA = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className='cta'>
      <div className='section-center cta__center'>
        <article className='cta__content'>
          <h3>Ce que nos clients disent :</h3>
          <div className='testimonials'>
            <div className='testimonial'>
              <p>"{testimonials[currentIndex].text}"</p>
              <p>- {testimonials[currentIndex].name}</p>
            </div>
            <div className='dots'>
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => changeTestimonial(index)}
                ></span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CTA;
