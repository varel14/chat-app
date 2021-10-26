import React from 'react'
import styled from 'styled-components'
import { BORDER, PRIMARY_COLOR, TERTIARY_COLOR } from '../public/colors'
import Logo from './Logo'
import Link from 'next/link'
import {AiOutlineClockCircle, AiOutlineEye, BiCalendarCheck, FaUserFriends, IoMdVideocam, MdBarChart} from 'react-icons/all'

const NavContainer = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    width: 90px;
    height: 100%;
    border: 1px solid ${BORDER};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & a {
        position: relative;
        display: block;
        & .icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 57px;
            border-radius: 10px;
            margin-bottom: 20px;
            &:last-child{
                margin-bottom: 0;
            }
        }
        & .right__bar{
            display: none;
            position: absolute;
            top: 0;
            right: -13px;
            height: 100%;
            width: 4px;
            background: ${PRIMARY_COLOR};
        }   
        &.active{
            & .icon{
                background: ${TERTIARY_COLOR};
            }
            & .right__bar{
                display: inline-block;
            }   
        }
    }

    & img.user__photo{
        width: 44px;
        height: 44px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 40px;
    }
`

const NavLink = ({href="", isActive = false, children}) => {
    return <Link href={href}>
        <a className={isActive ? "active" : ""}>
            <span className="icon">{React.cloneElement(children, {color: isActive ? PRIMARY_COLOR : "#b6b6b6"})}</span>
            <span className="right__bar"></span>
        </a>
    </Link>
}

const Nav = () => {
    return <NavContainer>
        <Logo/>
        <div className="nav__links">
            <NavLink><AiOutlineClockCircle size="25px"/></NavLink>
            <NavLink><BiCalendarCheck size="25px"/></NavLink>
            <NavLink><AiOutlineEye size="25px"/></NavLink>
            <NavLink isActive={true}><FaUserFriends size="25px"/></NavLink>
            <NavLink><MdBarChart size="25px"/></NavLink>
            <NavLink><IoMdVideocam size="25px"/></NavLink>
        </div>
        <img src="/images/1.jpg" alt="Photo de profil" className="user__photo"/>
    </NavContainer>
}

export default Nav