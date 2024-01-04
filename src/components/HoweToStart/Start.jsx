import React from 'react'
import "./Start.css"
import link1 from "../../assets/cube 1.jpg"
import management from "../../assets/online-conference 1.jpg"
import outsourcing from "../../assets/technical-support 1.jpg"
import heading from "../../assets/Heading 3.png"
import heading1 from "../../assets/Heading 7.png"
import heading2 from "../../assets/Heading 6.png"
import heading4 from "../../assets/Heading 6 (2).png"
import heading5 from "../../assets/Heading 6 (4).png"
import heading6 from "../../assets/Heading 6 (3).png"
const Start = () => {
  return (
    <>
    <section>
      <div className='bacground'>
        <h1>How to Start</h1>
        <p>We specialize in helping you build a team of <br /> expert developers.</p>
      </div>
      <div className='cart'>
        <div className='description'>
            <h2>How to Get Started with <br /> Courtney</h2>
            <p>From full-time remote engineering teams to hourly <br /> contractors, work with remote devs as needed</p>
        </div>
        <div className='wrapp'>
        <div className='content'>
        <div className='Cardd'>
            <img src={link1} alt="" />
            <h3> 01.Request</h3>
            <p>Tell us more about your <br /> requirements and technical needs</p>
        </div>
        <div className='Cardd'>
            <img src={management} alt="" />
            <h3>02.Interview</h3>
            <p>You interview candidates. Average 2 <br /> interviews to hire.</p>
        </div>
        <div className='Cardd'>
            <img src={outsourcing} alt="" />
            <h3>03.Hire</h3>
            <p>You choose who to hire, and we <br /> handle all the paperwork.</p>
        </div>
          </div>
        </div>
    </div>
    <div>
      <div className='subtitle'>
      <h2>Why You Need To Hire <br />Remote Developers</h2>
      </div>
      <div className='containerr1'>
        <img src={heading} alt="" />
        <img className='image' src={heading2} alt="" />
        <img src={heading4} alt="" />
      </div>
      <div className='containerr1'>
        <img src={heading1} alt="" />
        <img src={heading5} alt="" />
        <img src={heading6} alt="" />
      </div>
    </div>

    <div className='position'>
      <div className='title'>
        <h2>1000+</h2>
        <h3>Developers</h3>
      </div>

    </div>
    </section>
    </>
  )
}

export default Start
