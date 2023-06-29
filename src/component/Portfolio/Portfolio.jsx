import React from 'react'

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <h3>This is a portfolio item title</h3>
                  <a href="http://github.com/arjunn881" className='btn'>Github</a>
                  <a href="http://github.com/arjunn881" target='_blank' className='btn btn-primary'>Live Demo</a>
                  
                </div>
        </article>
      </div>
    </section>
  )
}
