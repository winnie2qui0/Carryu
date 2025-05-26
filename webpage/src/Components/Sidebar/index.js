import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SiderbarWrapper,
    SidebarRoute,
    SiderbarMenu
 } from './SidebarElement'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SiderbarWrapper>
            <SiderbarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="Dicover" onClick={toggle}>
                    Dicover
                </SidebarLink>
                <SidebarLink to="Service" onClick={toggle}>
                    Service
                </SidebarLink>
                <SidebarLink to="Signup" onClick={toggle}>
                    Sign Up
                </SidebarLink>
            </SiderbarMenu>
            <SideBtnWrap to="/signin">
                <SidebarRoute>
                    Sign In
                </SidebarRoute>
            </SideBtnWrap>
        </SiderbarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
