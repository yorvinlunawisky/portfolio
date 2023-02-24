import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>            
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>App Development: creating powerful and scalable web applications with Angular.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>Consulting: providing expert advice and best practices for Angular projects.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>Maintenance and support: ensuring the smooth operation of Angular applications.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>Angular integration: integrating Angular with other technologies to enhance functionality.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>Angular migration: helping businesses transition to Angular for better results.</p>
            </li>
          </ul>
        </article>
        {/* UI/UX Design*/}
        
        <article className='service'>
          <div className='service__head'>            
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>UI/UX design: creating intuitive and visually appealing user interfaces and experiences.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>Prototyping: designing interactive prototypes using Figma or Adobe XD to validate design concepts.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>Vector design: creating scalable vector graphics for logos, icons, and other graphics using Illustrator.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>Image editing: retouching and enhancing images using Photoshop to achieve the desired look and feel.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>3D design: creating 3D assets for websites, apps, and games using Blender.</p>
            </li>
          </ul>
        </article>
        {/*3D Design*/}
        
        <article className='service'>
          <div className='service__head'>            
            <h3>3D Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>3D modeling: creating high-quality and accurate 3D models using Blender.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>Texturing: designing and applying textures to 3D models using Substance Painter and Marvelous Designer.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>Lighting: setting up lighting scenes to create stunning visual effects and mood for 3D assets.</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>3D animation: creating dynamic and engaging 3D animations for websites, apps, and games..</p>
            </li>
            <li>
              <BiCheck className='service___list-icon'/>
              <p>Asset creation: developing 3D assets and content for various platforms, including video games.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services