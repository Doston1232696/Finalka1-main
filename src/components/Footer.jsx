import React from 'react'
import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo 1.png"
import phone from "../assets/Phone enabled.png"
import Email from "../assets/Email.jpg"
import location from "../assets/Location on.jpg"
import linkedin from "../assets/LinkedIn.png"
import Fasebok from "../assets/Facebook.jpg"
import Instagram from "../assets/Instagram.jpg"
import Twiter from "../assets/Twitter.jpg"
import Yutube from "../assets/YouTube.jpg"
const quickLinks = [
  {
    path: "/about",
    display: "About Us",
  },

  {
    path: "#",
    display: "Success Stories",
  },

  {
    path: "/cars",
    display: "Privacy Policy",
  },
  {
    path: "/blogs",
    display: "Terms & Conditions",
  },

  {
    path: "/contact",
    display: "Contact Us",
  },
];






const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
    <footer className='Cart'>
    <Container className='Card'>
        <Row className='Card'>
          <Col lg="4" md="4" sm="12" className='Card'>
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                 <img src={logo} alt="" />
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Expertly trained, battle-tested, elite <br />
            software developers on demand
            </p>
              <p className="office__info"><img src={phone} alt="" />+94 713249222</p>

              <p className="office__info"> <img src={Email} alt="" />hello@courtney.lk</p>

              <p className="office__info"> <img src={location} alt="" />Courtney Lanka (Private) Limited <br />Level 35 <br /> World Trade Center <br /> Colombo 01</p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Company</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-5">
            <h5 className="footer__link-title1">Services</h5>
            <div className='quick__link'>
            <li><a href="#0">Hire Permanent Staff</a></li>
            <li><a href="#0">Staff Augmentation</a></li>
            <li><a href="#0">Software Outsourcing</a></li>
            <li><a href="#0">Build Remote Office</a></li>
            </div>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
            <h5 className="footer__link-title1">How to Start</h5>
            <div className='quick__link'>
            <li><a href="#0">You Asked</a></li>
            <li><a href="#0">We Proceed</a></li>
            <li><a href="#0">Negotiate </a></li>
            <li><a href="#0">You Get </a></li>
            </div>
            </div>
          </Col>
          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Follow us</h5>
      
                <img src={linkedin} alt="" />
                <img src={Fasebok} alt="" />
                <img src={Instagram} alt="" />
                <img src={Twiter} alt="" />
                <img src={Yutube} alt="" />
            </div>
            <hr />
          </Col>

          <Col lg="12">
         <div className='info'>
         © 2022 courtney
         </div>
          </Col>
        </Row>
      </Container>


    </footer>
    </>
  )
}

export default Footer