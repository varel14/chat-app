import React from 'react'
import styled from 'styled-components'
import { BORDER, LIGHT_COLOR, PRIMARY_COLOR, TERTIARY_COLOR } from '../public/colors'
import Logo from './Logo'
import Link from 'next/link'
import {AiFillFilePdf, AiTwotoneFile, FiLink, IoChevronBackOutline, IoChevronForward, MdUnarchive, RiArchiveFill, RiDeviceFill} from 'react-icons/all'

const ChatDetailsContainer = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 75px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    & .header{
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid ${BORDER};
        & button{
            width: 40px;
            height: 40px;
        }
    }
    & .chat__photo{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        object-fit: cover;
        margin-top: 40px;
        margin-bottom: 25px;
    }
    & h3{
        font-weight: 500;
        font-size: 16px;
        color: ${LIGHT_COLOR};
        text-align: center;
    }
    & button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        border-radius: 8px;
        border: none;
        margin-bottom: 20px;
    }
`

const ChatDetails = () => {
    return <ChatDetailsContainer>
        <div className="header">
            <button className="show__details__buttons">
                <IoChevronBackOutline size="18px"/>
            </button>
        </div>
        <img src="/images/2.jpg" alt="" className="chat__photo"/>
        <div className="actions">
            <h3>Files</h3>
            <button style={{background: "#DDD6FF"}}><AiTwotoneFile color="#441FFF" size="20px"/></button>
            <button style={{background: "#FEE9C3"}}><RiArchiveFill color="#FCAF22" size="20px"/></button>
            <button style={{background: "#ECFCFE"}}><MdUnarchive color="#16D9F3" size="20px"/></button>
            <button style={{background: "#F7C9B5"}}><RiDeviceFill color="#EB7847" size="20px"/></button>
            <button style={{background: "#E4FDC4"}}><FiLink color="#447604" size="20px"/></button>
        </div>
    </ChatDetailsContainer>
}

export default ChatDetails