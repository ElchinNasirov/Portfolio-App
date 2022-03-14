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

const Skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                Skill Component
            </Box>
        </ThemeProvider>
    )
}

export default Skills;