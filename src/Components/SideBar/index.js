import React from 'react'
import { SideBarContainer,Icon,CloseIcon,
    SideBarLink,SideBarMenu,
    SideBarRoute,SideBarWrapper,
    SideBtnWrapp, Side } from './SideBarElements'
const SideBar = ({isOpen,toggle}) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SideBarWrapper>
              <SideBarMenu>
                  <SideBarLink to="about" onClick={toggle}>
                      About
                  </SideBarLink>
                  <SideBarLink to="discover" onClick={toggle}>
                      Discover
                  </SideBarLink>
                  <SideBarLink to="services" onClick={toggle}>
                      Services
                  </SideBarLink>
                  <SideBarLink to="signup" onClick={toggle}>
                      Sign Up
                  </SideBarLink>
              </SideBarMenu>
              <SideBtnWrapp>
                  <SideBarRoute to="/signin" onClick={toggle}>
                      Sign In
                  </SideBarRoute>
              </SideBtnWrapp>
          </SideBarWrapper>
      </SideBarContainer>
    </>
  )
}

export default SideBar

