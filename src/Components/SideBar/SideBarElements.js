import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import{Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SideBarContainer=styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    display:grid;
    align-items:center;
    top:0;
    left:0:
    transition:0.3 ease-in out;
    opacity: ${({ isOpen })=> (isOpen ? '100%' : '0' )};
    top: ${({isOpen})=>(isOpen ? '0' : '-100%')}
`

export const CloseIcon=styled(FaTimes)`
    color:#fff;
`

export const Icon=styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none; 
`

export const SideBarWrapper=styled.div`
    color:#fff;
`

export const SideBarMenu=styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;

    @media screen and (max-width: 765px){
        grid-template-rows:repeat(6 ,60px);
    }
`

export const SideBarLink=styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:0.2 ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor:pointer;

    &:hover{
        color:#01bf71;
        trannsition:0.2s ease-in-out;
    }
`


export const SideBtnWrapp=styled.div`
    display:flex;
    justify-content:center;
`

export const SideBarRoute=styled.div`
    border-radius:50px;
    background:#46CB18;
    white-space:nowrap;
    padding:16px 64px;
    color:#010606;
    font-size:18px;
    font-weight:620;
    outline:none;
    border:none;
    cursor:pointer;
    text-decoration:none;
    transition:all 0.2s ease-in-out;

    &:hover{
        transition:all 0.2 ease-in-out;
        background:orange;
        color:white;
    }
`


























