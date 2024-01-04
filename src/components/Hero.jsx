import React from 'react'
import Arrow from "../assets/arrow_forward.svg"

import './Hero.css'

const Hero = () => {
  return (
   <>
   <section>
    <div className='wrapper'>
        <div className='container'>
        <div className='title'>
            <h1>Building dev team,<br />Quickly and <br /> Affordably</h1>
                <p>We specialize in helping you build a team of expert <br />
                 developers, testers, and leaders. We are setup to <br />
                 deliver long term solutions, or scale to different <br />
                 needs quickly.</p>
                 <button className='btn'>Build a team <img className='arrow'   src={Arrow} alt="" /></button>
            </div>
        </div>
        <div className='img1'></div>
        
    </div>
   </section>
   
   </>
  )
}

export default Hero