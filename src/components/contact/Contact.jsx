import React from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rzccint', 'template_7fsutjr', form.current, 'ytfLdYqsLU5WA_zvi')
    e.target.reset()
    
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yorvin0506@gmail.com</h5>
            <a href="mailto:yorvin0506@gmail.com" target="_blank">Send a message</a>
          </article>
          
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>yorvin0506@gmail.com</h5>
            <a href="https:m.me/Yorvinlunawisky" target="_blank">Send a message</a>
          </article>
          
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(1) 829-450-2903</h5>
            <a href="http://api.whatsapp.com/send?phone=8294502903" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact