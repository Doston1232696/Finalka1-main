import React from 'react'
import './SectionBlock.css'
import link1 from "../../assets/link 1.jpg"
import management from "../../assets/management 1.jpg"
import outsourcing from "../../assets/outsourcing 1.jpg"
import shield from "../../assets/shield 1.jpg"


const SectionBlock = () => {
  return (
    <>
    
    
    
    <div className='card'>
        <div className='subtitle1'>
            <h5>Expertise</h5>
            <h2>Hire Permanent and Remote <br /> Developers</h2>
        </div>
        <div className='subtitle1'>
            <p>From full-time remote engineering teams to hourly <br />
             contractors, work with remote devs as needed</p>
        </div>
        <div>
        <div className='wrapp'>
        <div className='container'>
        <div>
            <img src={link1} alt="" />
        </div>
        <div>
            <h3>Dedicated Teams</h3>
            <p>Find your next team member</p>
        </div>
        <div>
            <img src={management} alt="" />
            
        </div>
        <div>
            <h3>Staff Augmentation</h3>
            <p>Build a distributed development team</p>
        </div>
        <div>
            <img src={outsourcing} alt="" />
            
        </div>
        <div>
            <h3>Software Outsourcing</h3>
            <p>End-to-End Software Development <br />
             Outsourcing Solutions</p>

        </div>
        <div>
            <img src={shield} alt="" />
        </div>
        <div>
            <h3>Remote Office</h3>
            <p>Open your own remote development <br />
             center and grow your business</p>

        </div>
        </div>

    </div>

        </div>
    </div>
    </>
  )
}

export default SectionBlock