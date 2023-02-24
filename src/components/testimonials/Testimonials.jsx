import React from 'react';
import './testimonials.css';

import JUNIOR from '../../assets/gleiverson.png';
import JULIO from '../../assets/julio.png';
import GLEIVERSON from '../../assets/avatar.jpg';

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/pagination';


const data = [
  {
    avatar: JULIO,
    name: 'Julio César',
    review: 'The Angular app Yorvin developed for us was outstanding. It was visually stunning, easy to use, and performed flawlessly.'
  },
  {
    avatar: JUNIOR,
    name: 'Junior Zapata',
    review: 'Thanks to Yorvin\'s Angular expertise, our web app exceeded our expectations. Their attention to detail and user experience design was exceptional.'
  },
  {
    avatar: GLEIVERSON,
    name: 'Gleiverson Oller',
    review: 'I was blown away by the Angular web app that this guy developed for our business. Their skills in Angular and UI/UX design created a seamless user experience and boosted engagement.'
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
       // install Swiper modules
       modules={[Pagination, Autoplay]}
       spaceBetween={40}  
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review,}, index) => {
            return (                      
              <SwiperSlide key={index} className='testimonial'>
                  <div className='client__avatar'>
                    <img src={avatar} alt="Avatar"/>
                  </div>
                    <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials