
import "./Navbar.css"
import 'remixicon/fonts/remixicon.css'
import png from "../../assets/keyboard_arrow_down.png"
import keybordArrow from "../../assets/arrow_forward.png"

import Im1 from "../../assets/logo 1.png"

function NavScrollExample() {
  return (
   <>
  <header>
    <div className="logo">
     <a href="/"><img src={Im1} alt="" /></a>
    </div>
    <ul className="link">
      <li><a href="/HowtoStart">How to start</a></li>
      <li><a href="/OurService">Services
      <img src={png} alt="" />
      </a></li>
      <li><a href="/Technologies">Technologies
      <img src={png} alt="" />
      </a></li>
      <li><a href="/Careers">Careers</a></li>
    </ul>
    <ul className="main">
      <li><a href="#0" className="border1">BUILD A TEAM
      <img src={keybordArrow} alt="" />
      </a></li>
      <li><a href="#0">Contact us</a></li>
    </ul>
    <div className='toggle_btn'>
    <i class="ri-menu-line" id="menu-icon"></i>
    </div>
   
  </header>
   
   </>
  );
}

export default NavScrollExample;