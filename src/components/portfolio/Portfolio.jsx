import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.webp';
import IMG2 from '../../assets/portfolio2.webp';
import IMG3 from '../../assets/portfolio3.webp';
import IMG4 from '../../assets/portfolio4.webp';
import IMG5 from '../../assets/portfolio5.webp';
import IMG6 from '../../assets/portfolio6.webp';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency DashBoard & Financial Visualization',
    github: 'http://github.com',
    demo: 'http://dribble.com'
  },
  
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency DashBoard & Financial Visualization',
    github: 'http://github.com',
    demo: 'http://dribble.com'
  },
  
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency DashBoard & Financial Visualization',
    github: 'http://github.com',
    demo: 'http://dribble.com'
  },
  
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency DashBoard & Financial Visualization',
    github: 'http://github.com',
    demo: 'http://dribble.com'
  },
  
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency DashBoard & Financial Visualization',
    github: 'http://github.com',
    demo: 'http://dribble.com'
  },
  
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency DashBoard & Financial Visualization',
    github: 'http://github.com',
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