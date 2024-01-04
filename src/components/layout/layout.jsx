import React, { Fragment } from 'react'
import "./layout.css"

import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import Routers from '../../Routes/Routers'


const Layout = () => {
  return (
   <>
    <Fragment>
    <Navbar/>
    <div>
      <Routers/>

    </div>
    <Footer/>
   </Fragment>

     

   
   </>
  )
}

export default Layout