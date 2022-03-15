import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { DeveloperIcon } from "../subComponents/SVGs";

import Logo from "../subComponents/Logo";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { SkillsParticles } from "../subComponents/SkillsParticles";

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
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: "Ubuntu Mono", monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const TitleContainer = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${MainContainer}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const DescriptionContainer = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${MainContainer}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const Skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <Logo />
                <SocialIcons />
                <PowerButton />
                <SkillsParticles />

                <MainContainer>
                    <TitleContainer>
                        <DeveloperIcon width={40} height={40} />
                        Full Stack Web Developer
                    </TitleContainer>
                    <DescriptionContainer>
                        Full Stack Developer description
                    </DescriptionContainer>
                    <DescriptionContainer>
                        <strong>
                            Skills
                        </strong>
                        <p>
                            Node.js, Express, Knex, SQL, PostgreSQL, Docker, Python, Git CLI, GitHub, VS Code, Vercel, Heroku, Netlify

                        </p>
                    </DescriptionContainer>
                    <DescriptionContainer>
                        <strong>Additional Skills/Tools</strong>
                        <p>
                            Algorithms, Architecture, Debugging, Deployment
                        </p>
                    </DescriptionContainer>
                </MainContainer>

                <MainContainer>
                    <TitleContainer>
                        <DeveloperIcon width={40} height={40} />
                        Front End Web Developer
                    </TitleContainer>
                    <DescriptionContainer>
                        Front End Web Developer description
                    </DescriptionContainer>
                    <DescriptionContainer>
                        <strong>
                            Skills
                        </strong>
                        <p>
                            HTML, CSS, JavaScript, React, Redux, Context API, Axios, SASS, Bootstrap etc.
                        </p>
                    </DescriptionContainer>
                    <DescriptionContainer>
                        <strong>Additional Skills/Tools</strong>
                        <p>
                            VSCode, Github, Codepen etc.
                        </p>
                        <p>
                            Agile Project Management, Debugging
                        </p>
                    </DescriptionContainer>
                </MainContainer>

            </Box>
        </ThemeProvider>
    )
}

export default Skills;