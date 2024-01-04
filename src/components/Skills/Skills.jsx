import React from 'react'
import REactLogo from "../../assets/React_logo_wordmark 1.png"
import Angular from "../../assets/angular-logo-icon-png-svg 1.png"
import Next from "../../assets/image 3.png"
import Node from "../../assets/image 4.png"
import chip from "../../assets/arrow_forward.png"
import "./Skills.css"


const Skils = () => {
  return (
    <div>
        <div className='wrapp'>
            <div className='contain'>
                <div>
                    <h4>Specialized</h4>
                    <h2>Technologies</h2>
                </div>
                <div className='box1'>
                    <img src={REactLogo} alt="" />
                    <img src={Angular} alt="" />
                    <img  src={Next} alt="" />
                    <img src={Node} alt="" />
                    <img src={chip} alt="" />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Skils