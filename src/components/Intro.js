import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

var ReactRotatingText = require('react-rotating-text');

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 65vw;
height: 55vh;
display: flex;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,

    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;

    background-repeat: no-repeat;

background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};

    z-index:1;
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const LeftTextContainer = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;
`

const RightTextContainer = styled.div`
background-color: black;
width: 35rem;
height: 4rem;
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.text};
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;

.react-rotating-text-cursor {
    animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }

  color(string) {

  }
  
  @keyframes blinking-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const Intro = () => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>

                <LeftTextContainer>
                    <h1>Hi,</h1>
                    <h3>I'm <b>Elchin</b></h3>
                </LeftTextContainer>

            </SubBox>

            <SubBox>

                <RightTextContainer>
                    <ReactRotatingText items={['Full Stack Web Developer', "Front End Web Developer", "Software Engineer"]} color="green" />
                </RightTextContainer>

            </SubBox>
        </Box>
    )
}

export default Intro;