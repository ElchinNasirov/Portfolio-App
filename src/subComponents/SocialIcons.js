import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, LinkedIn } from "./SVGs";
import {darkTheme} from "../components/Themes"

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
background-color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body}
`

const SocialIcons = (props) => {
    return (
        <IconsContainer>
            <div>
                <NavLink style={{color:"inherit"}} target="_blank" to={{pathname: "https://LinkedIn.com"}}>
                    <LinkedIn width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>

                <NavLink style={{color:"inherit"}} target="_blank" to={{pathname: "https://GitHub.com"}}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <LineContainer color={props.theme}/>
        </IconsContainer>
    )
}

export default SocialIcons;