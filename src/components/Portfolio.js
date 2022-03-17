import React from "react";
import PortfolioCard from "./PortfolioCard";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import { motion } from "framer-motion";

const Box = styled.div`
background-color: ${props => props.theme.body};

height:400vh;
position: relative;
display: flex;
align-items: center;
`

const MainContainer = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;
color: white;
`


const Portfolio = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <MainContainer>
                    <PortfolioCard>
                        Work Component
                    </PortfolioCard>
                </MainContainer>
            </Box>
        </ThemeProvider>
    )
}

export default Portfolio;