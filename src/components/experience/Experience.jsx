import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                    
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                      
                    <h4>CSS</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                      
                    <h4>JavaScript</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                    
                    <h4>TailWind</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                      
                    <h4>Angular</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                    
                    <h4>React</h4>
                    <small className='text-light'>Basic</small>
                  </div>
              </article>
            </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='experience__backend '>
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                      
                    <h4>Node JS</h4>
                    <small className='text-light'>Basic</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                    
                    <h4>Mongo DB</h4>
                    <small className='text-light'>Basic</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                      
                    <h4>Postgress</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                      
                    <h4>Python</h4>
                    <small className='text-light'>Basic</small>
                  </div>
              </article>
            </div>
        </div>
        
        {/* END OF BACKEND */}
        <div className='experience__backend '>
            <h3>3D Designs</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                      
                    <h4>Blender</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                    
                    <h4>Substance Painter</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                      
                    <h4>Marvelous Designer</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>                      
                    <h4>Unreal Engine</h4>
                    <small className='text-light'>Basic</small>
                  </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience