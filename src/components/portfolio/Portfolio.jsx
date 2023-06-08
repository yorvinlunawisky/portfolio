import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.webp';
import IMG6 from '../../assets/portfolio6.webp';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Sistema Electrónico de Garantías Mobiliarias',
    github: 'https://github.com/yorvinlunawisky',
    demo: 'https://app.segm.gob.do/'
  },
  
  {
    id: 2,
    image: IMG4,
    title: 'Directorio Creativo',
    github: 'https://github.com/yorvinlunawisky',
    demo: 'https://directoriocreativo.gob.do/#/'
  },
  
  {
    id: 3,
    image: IMG3,
    title: 'Semana Mipymes',
    github: 'https://github.com/yorvinlunawisky',
    demo: 'https://app.semanamipymes.do/'
  },
  
  {
    id: 4,
    image: IMG2,
    title: 'Fando: Sport Pools Game',
    github: 'https://github.com/yorvinlunawisky',
    demo: 'http://dribble.com'
  },
  
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency DashBoard & Financial Visualization',
    github: 'https://github.com/yorvinlunawisky',
    demo: 'http://dribble.com'
  },
  
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency DashBoard & Financial Visualization',
    github: 'https://github.com/yorvinlunawisky',
    demo: 'http://dribble.com'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (                      
            <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>              
                  <a href={github} className='btn' target='_blank'  rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'  rel="noreferrer">Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio