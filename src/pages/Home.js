import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection'
import { DataObjt1 ,DataObjt2,DataObjt3} from '../Components/InfoSection/Data'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import Link from 'react-scroll/modules/components/Link'
const Home = () => {


  const [isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
    console.log("is clicked "+isOpen);
  }

  return (
    <>
    <NavBar toggle={toggle} />
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <HeroSection />
    <InfoSection  {...DataObjt1}/>
    <InfoSection  {...DataObjt2}/>
    <Services />
    <InfoSection  {...DataObjt3}/>
    <Footer />
  </>
  )
}

export default Home

