import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const MainContainer = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.body};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

font-family: "Ubuntu Mono", monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <MainContainer>
                    left
                </MainContainer>
                <MainContainer>
                    right
                </MainContainer>
            </Box>
        </ThemeProvider>
    )
}

export default Skills;