import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import HowtoStart from '../Pages/HowtoStart';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import TechnologHome from '../Pages/TechnologHome';


const Routers = () => {
  return (
    <>
     <Routes>
     <Route index element = {<Home/>}/>
      <Route path='/HowtoStart' element={<HowtoStart/>} />
      <Route path='OurService' element={<Service/>} />
      <Route path='/Technologies' element={<TechnologHome/>} />
    </Routes>
    
    
    
    </>
  )
}

export default Routers