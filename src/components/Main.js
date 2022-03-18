import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Logo from "../subComponents/Logo";
import SocialIcons from "../subComponents/SocialIcons";
import { CenterIcon } from "../subComponents/SVGs";
import Intro from "./Intro";

const MainContainer = styled.div`
background: ${props => props.theme.body}
width: 100wh;
height: 100vh;
overflow: hidden;

position: relative;

h2, h3, h4, h5, h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
}
`

const SubContainer = styled.div`
padding: 2rem;
`
const rotate = keyframes`
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
`

const CenterContainer = styled.button`
position: absolute;
top: ${props => props.click ? "85%" : "50%"};
left: ${props => props.click ? "92%" : "50%"};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 3.0s linear
}

&>:last-child {
    display: ${props => props.click ? "none" : "inline-block"};
    padding-top: 1rem;
}
`

const DarkThemeContainer = styled.div`
position: absolutr;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? "50%" : "0%"};
height: ${props => props.click ? "100%" : "0%"};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const ContactContainer = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const BlogContainer = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const PortfolioContainer = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
z-index: 1;
`

const FooterContainer = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const AboutContainer = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
`

const SkillsContainer = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const Main = () => {

    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(!clicked)

    return (
        <MainContainer>
            <DarkThemeContainer click={clicked} />
            <SubContainer>
                <Logo theme={clicked ? "dark" : "light"} />
                <SocialIcons theme={clicked ? "dark" : "light"} />

                <CenterContainer click={clicked}>
                    <CenterIcon onClick={() => handleClick()} width={clicked ? 120 : 200} height={clicked ? 120 : 200} fill="currentColor" />
                    <span>click here</span>
                </CenterContainer>

                <ContactContainer target="_blank" to={{ pathname: "mailto:nasirov.elchin@gmail.com" }}>
                    <motion.h3
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contact
                    </motion.h3>
                </ContactContainer>

                <BlogContainer to="/blog">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Blog
                    </motion.h2>
                </BlogContainer>

                <PortfolioContainer click={clicked} to="/portfolio">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Portfolio
                    </motion.h2>
                </PortfolioContainer>

                <FooterContainer>

                    <AboutContainer click={clicked} to="/about">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About
                        </motion.h2>
                    </AboutContainer>

                    <SkillsContainer to="/skills">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Skills
                        </motion.h2>
                    </SkillsContainer>

                </FooterContainer>

            </SubContainer>
            {clicked ? <Intro click={clicked} /> : null}
        </MainContainer>
    )
}

export default Main;