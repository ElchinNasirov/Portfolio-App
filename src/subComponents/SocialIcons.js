import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, LinkedIn } from "./SVGs";

const IconsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const LineContainer = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.theme.text}
`

const SocialIcons = () => {
    return (
        <IconsContainer>
            <div>
                <NavLink style={{color:"inherit"}} target="_blank" to={{pathname: "https://LinkedIn.com"}}>
                    <LinkedIn width={25} height={25} fill="currentColor" />
                </NavLink>

                <NavLink style={{color:"inherit"}} target="_blank" to={{pathname: "https://GitHub.com"}}>
                    <Github width={25} height={25} fill="currentColor" />
                </NavLink>
            </div>
            <LineContainer/>
        </IconsContainer>
    )
}

export default SocialIcons;