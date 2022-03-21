import React, { useEffect, useRef } from "react";
import PortfolioCard from "./PortfolioCard";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import { motion } from "framer-motion";
import { Projects } from "../data/PortfolioData";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitle";
import Logo from "../subComponents/Logo";
import SocialIcons from "../subComponents/SocialIcons";

const Box = styled.div`
background-color: ${props => props.theme.body};

height:400vh;
position: relative;
display: flex;
align-items: center;
`

const MainContainer = styled(motion.ul)`
position: fixed;
top: 20rem;
left:calc(1rem + 10vw);
height: 40vh;
display: flex;
color: white;
`

const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`

// Framer-motion configuration
const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}

const Portfolio = () => {

    const ref = useRef(null);
    const centerIcon = useRef(null);


    useEffect(() => {
        let element = ref.current;


        const rotate = () => {

            element.style.transform = `translateX(${-window.pageYOffset}px)`

            return (centerIcon.current.style.transform =
                'rotate(' + -window.pageYOffset + 'deg)')
        }

        window.addEventListener('scroll', rotate)
        return () => {
            window.removeEventListener('scroll', rotate);
        }
    }, [])

    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <Logo theme="dark" />
                <SocialIcons theme="dark" />
                <PowerButton />
                <MainContainer ref={ref} variants={container} initial='hidden' animate='show'>

                    {
                        Projects.map(project =>
                            <PortfolioCard key={project.id} data={project} />
                        )
                    }

                </MainContainer>

                <Rotate ref={centerIcon} />

                <BigTitle text="PORTFOLIO" top="80%" right="3%" />
            </Box>
        </ThemeProvider>
    )
}

export default Portfolio;