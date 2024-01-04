import React from 'react'
import Cube from "../../assets/link 1.jpg"
import Soft from "../../assets/management 1.jpg"
import texch from "../../assets/outsourcing 1.jpg"

const OurService = () => {
  return (
   <>
   <section className='section'>
   <div className='bacground'>
        <h1>Our Services</h1>
        <p>We specialize in helping you build a team of <br /> expert developers.</p>
      </div>
      <div className='subtitle'>
        <h2>Hire Permanent and Remote <br /> Developers</h2>
        <p>From full-time remote engineering teams to hourly <br /> contractors, work with remote devs as needed</p>
      </div>
      <div className='wrapper'>
        <div className='container'>
        <div>
            <img src={Cube} alt="" />
        </div>
        <div>
            <h3>Dedicated Teams</h3>
            <p>Building an extended team with Courtney is just like opening <br /> your own remote development center, but without the hassle.</p>
        </div>
        </div>

        
        <div className='container'>
        <div>
            <img src={Soft} alt="" />
        </div>
        <div>
            <h3>Staff Augmentation</h3>
            <p>IT Staff Augmentation is a service designed to add extra talent to <br /> your team on an on-demand basis. This allows businesses  to <br /> immediately find the right fit for hard-to-fill or temporary <br /> positions, which boosts the scalability and efficiency of project development.</p>
        </div>
        </div>

        
        

    </div>
    <div className='wrapper'>
        <div>
            <img src={texch} alt="" />
        </div>
        <div className='texting'>
            <h3>Software Outsourcing</h3>
            <p>Today, organizations all over the world deal with software <br /> outsourcing companies to have access to experienced <br /> software engineers with a variety of tech expertise ranging <br /> from user experience design to blockchain consulting.</p>
        </div>
        <div>
            <img src={texch} alt="" />
        </div>
        <div className='text'>
            <h3>Software Outsourcing</h3>
            <p>Today, organizations all over the world deal with software <br /> outsourcing companies to have access to experienced <br /> software engineers with a variety of tech expertise ranging <br /> from user experience design to blockchain consulting.</p>
        </div>
        
    </div>
        
        
    
   

   </section>
   
   
   </>
  )
}

export default OurService