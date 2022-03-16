import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'

const LogoContainer = styled.h1`
display: inline-block;
color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body};
font-family: "Ubuntu Mono", monospace;
position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
`

const Logo = (props) => {
    return (
        <LogoContainer color={props.theme}>
          EN
        </LogoContainer>
    )
}

export default Logo;