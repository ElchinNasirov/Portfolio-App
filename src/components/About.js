import React from "react";
import styled, { ThemeProvider } from 'styled-components'
import AboutParticles from "../subComponents/AboutParticles";
import BigTitle from "../subComponents/BigTitle";
import { darkTheme } from './Themes';
import PowerButton from "../subComponents/PowerButton";
import Logo from "../subComponents/Logo";
import SocialIcons from "../subComponents/SocialIcons";

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
                <Logo theme="dark" />
                <SocialIcons theme="dark" />
                <PowerButton />
                <AboutParticles />
                <MainContainer>
                    I'm a Front End Web Developer from  San Francisco. I love to create simple yet beautiful websites with great user experience.
                    <br /><br />
                    On a personal level, I am highly-motivated, result oriented, self-driven, hard-working,
                    fast learner and constantly seeking to improve my skills and am fully aware of the latest Front End Development tools.
                    <br /><br />
                    In addition to this, I have the ability to adapt to any type of team environment,
                    I am team oriented and get along with others when working in a group setting.
                    I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                </MainContainer>
            </Box>
            <BigTitle text="ABOUT" top="80%" right="10%" />
        </ThemeProvider>
    )
}

export default About;