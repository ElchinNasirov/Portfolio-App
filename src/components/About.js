import React from "react";
import styled, { ThemeProvider } from 'styled-components'
import AboutParticles from "../subComponents/AboutParticles";
import BigTitle from "../subComponents/BigTitle";
import { darkTheme } from './Themes';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const MainContainer = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const About = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
            <AboutParticles />
                <MainContainer>
                    About Component
                </MainContainer>
            </Box>
            <BigTitle text="ABOUT" top="80%" right="10%" />
        </ThemeProvider>
    )
}

export default About;