import React from 'react'
import Cube from "../../assets/cube 1.png"
import Soft from "../../assets/software-application 1.png"
import texch from "../../assets/technical-support 1.jpg"

import "./Solution.css"

const Solution = () => {
  return (
    <>
    <div className='wrapp'>
        <div className='container1'>
        <div>
            <img src={Cube} alt="" />
        </div>
        <div>
            <h3>Architect your Solution</h3>
            <p>Our team in on your operational, <br /> technological, and strategic challenges <br />
             through an in-depth understanding of <br /> 
             your business. We design a strategic <br /> 
             roadmap to guide your result-oriented <br /> goals.</p>
        </div>
        </div>

        
        <div className='container1'>
        <div>
            <img src={Soft} alt="" />
        </div>
        <div>
            <h3>Engineer your <br /> Solution</h3>
            <p>We promptly put together your <br /> 
            nearshore engineering dream team <br />
            to fulfill your specific requirements. <br /> 
            We create the most elegant solution <br /> 
            for your difficulties by combining our <br />
            deep tech expertise, Top 1% Tech Talent, <br /> 
            and industry-specific experience.</p>
        </div>
        </div>


        <div className='container1'>
        <div>
            <img src={texch} alt="" />
        </div>
        <div>
            <h3>ReEngineer your <br /> Business Process</h3>
            <p>Bolster by our team, your digital <br />
            transformation swiftly gains speed and <br />
            evolves into a digital acceleration. <br />
            This process places the foundation <br /> 
            for a more efficient and strong business <br />
            that can meet demands at scale.</p>

        </div>
        </div>

    </div>
    
    </>
  )
}

export default Solution