import React, { useEffect, useState } from 'react'
import {Nav,NavBarContainer,
    NavLogo,
    MobileIcon,NavMenu,
    NavLinks,NavItem,
    NavBtn,NavBtnLink
} from './NavBarElements';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import {animateScroll as scroll } from 'react-scroll'


const NavBar = ({toggle}) => {

    const [scrollNav,setScrollNav]=useState(false);

    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])


    const toggleHome=()=>{
        scroll.scrollToTop()
    }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavBarContainer>
                <NavLogo to='' onClick={toggleHome}>alawii</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavBarContainer>
        </Nav>
        <Outlet/>

    </>
  )
}

export default NavBar
