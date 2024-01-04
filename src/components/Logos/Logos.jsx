import React from 'react'
import "./Logos.css"
import Logo from "../../assets/Logo.png"
import chip from "../../assets/arrow_forward.png"

const Logos = () => {
  return (
    <div>
    <div className='wrapp'>
        <div className='contain'>
            <div>
                <h4>Specialized</h4>
                <h2>Technologies</h2>
            </div>
            <div className='box1'>
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
                <img  src={Logo} alt="" />
                <img src={Logo} alt="" />
                <img src={chip} alt="" />
            </div>

        </div>
    </div>
  
</div>
  )
}

export default Logos