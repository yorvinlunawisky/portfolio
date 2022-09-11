import React from 'react';
import './testimonials.css';

import AVTR1 from '../../assets/avatar.jpg';

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores totam doloremque facilis animi aliquid accusamus sed deleniti. Soluta architecto voluptates odit omnis voluptas, aperiam asperiores molestias dolorem, facere, nam incidunt fugit! Reiciendis modi nisi deserunt, perspiciatis ipsam facilis deleniti!'
  },
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores totam doloremque facilis animi aliquid accusamus sed deleniti. Soluta architecto voluptates odit omnis voluptas, aperiam asperiores molestias dolorem, facere, nam incidunt fugit! Reiciendis modi nisi deserunt, perspiciatis ipsam facilis deleniti!'
  },
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores totam doloremque facilis animi aliquid accusamus sed deleniti. Soluta architecto voluptates odit omnis voluptas, aperiam asperiores molestias dolorem, facere, nam incidunt fugit! Reiciendis modi nisi deserunt, perspiciatis ipsam facilis deleniti!'
  },
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores totam doloremque facilis animi aliquid accusamus sed deleniti. Soluta architecto voluptates odit omnis voluptas, aperiam asperiores molestias dolorem, facere, nam incidunt fugit! Reiciendis modi nisi deserunt, perspiciatis ipsam facilis deleniti!'
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