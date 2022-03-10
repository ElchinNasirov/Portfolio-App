import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../subComponents/Logo";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

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

const Container = styled.div`
padding: 2rem;
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
z-index: 1;
`

const WorkContainer = styled(NavLink)`
color: ${props => props.theme.text};
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
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const SkillsContainer = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const Main = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <Logo />
                <SocialIcons />


                <ContactContainer target="_blank" to={{ pathname: "mailto:nasirov.elchin@gmail.com" }}>
                    <h3>
                        Say "Hi.."
                    </h3>
                </ContactContainer>

                <BlogContainer to="/blog">
                    <h3>
                        Blog
                    </h3>
                </BlogContainer>

                <WorkContainer to="/work">
                    <h3>
                        Work
                    </h3>
                </WorkContainer>

                <FooterContainer>

                    <AboutContainer to="/about">
                        <h3>
                            About
                        </h3>
                    </AboutContainer>

                    <SkillsContainer to="/skills">
                        <h3>
                            Skills
                        </h3>
                    </SkillsContainer>

                </FooterContainer>


            </Container>
        </MainContainer>
    )
}

export default Main;