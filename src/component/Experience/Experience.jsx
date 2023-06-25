 
import React from 'react'
import '../Experience/Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have ???</h5>
      <h2>My Experience</h2>

      <div className="container  experience__container">
        <div className="experience__frontend">
            <h3>Frontend Developement</h3>
            <div className="experience__content">



              <article className="experience details">
                  <BsPatchCheckFill/>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </article>

              <article className="experience details">
                  <BsPatchCheckFill/>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article className="experience details">
                  <BsPatchCheckFill/>
                  <h4>SASS</h4>
                  <small className='text-light'>Experienced</small>
              </article>

              <article className="experience details">
                  <BsPatchCheckFill/>
                  <h4>javaScript</h4>
                  <small className='text-light'>Experienced</small>
              </article>

              <article className="experience details">
                  <BsPatchCheckFill/>
                  <h4>jQuery</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article className="experience details">
                  <BsPatchCheckFill/>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
              </article>

              <article className="experience details">
                  <BsPatchCheckFill/>
                  <h4>React Js</h4>
                  <small className='text-light'>Experienced</small>
              </article>


            </div>

        </div>

        <div className="experience__backend">
          
          </div>
      </div>
    </section>
  )
}
