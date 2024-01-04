import React from 'react'
import "./Process.css"
import Group from "../../assets/Group.png"
import Group1 from "../../assets/Group.jpg"
import Handshake from "../../assets/handshake 3.png"
import Medal from "../../assets/medal 3.png"
const Process = () => {
  return (
    <>
    {/* <section className='section'>
            <div className='subtitles'>
                <h4>How to Start</h4>
                <h2>Easy Process</h2>
                <p>We specialize in helping you build a team <br /> 
                of expert developers, testers, and leaders.</p>
            </div>
        <div className='wrapper'>
            <div >
                <img width={100} src={Group} alt="" />
                <h2>01</h2>
                <p>YOU ASK</p>
            </div>
            <div>
                <img width={100} src={Group1} alt="" />
                <h2>02</h2>
                <p>WE PROCEED</p>
            </div>
            <div>
                <img src={Handshake} alt="" />
                <h2>03</h2>
                <p>Negotiate</p>
            </div>
            <div>
                <img src={Medal} alt="" />
                <h2>04</h2>
                <p>YOU GET</p>
            </div>

        </div>
    </section> */}
    <div className='wrapperr'>
        <h4>How to Start</h4>
        <h2>Easy Process</h2>
        <p>We specialize in helping you build a team <br /> 
        of expert developers, testers, and leaders.</p>
        <div className='conatiner'>
            <div className='box'>
                <img src={Group} alt="" />
                <h3>01</h3>
                <p>You Ask</p>
            </div>
            <div className='box'>
                <img src={Group1} alt="" />
                <h3>02</h3>
                <p>WE PROCEED</p>
            </div>
            <div className='box'>
                <img src={Handshake} alt="" />
                <h3>03</h3>
                <p>Negotiate</p>
            </div>
            <div className='box'>
                <img src={Medal} alt="" />
                <h3>04</h3>
                <p>YOU GET</p>
            </div>


        </div>

    </div>
    
    </>
  )
}

export default Process