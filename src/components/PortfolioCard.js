import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GitHub } from "../subComponents/SVGs";

const Box = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};

padding: 1.5rem 2rem;
margin-right: 8rem;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
}
`

const TitleContainer = styled.h2`
font-size: calc(1em + 0.5vw);
`

const DescriptionContainer = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`
const LinkContainer = styled(NavLink)`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration: none;
padding: 0.5rem calc(2rem + 2vw);
border-radius: 0 50px 50px 0;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
}
`

const GitHubContainer = styled(NavLink)`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props => props.theme.text};
    }
}
`
const TagsContainer = styled.div`
border-top: 2px solid ${props => props.theme.body};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props => props.theme.text};
}
`
const TagContainer = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const FooterContainer = styled.footer`
display: flex;
justify-content: space-between;
`

// Framer motion configuration
const Item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const PortfolioCard = (props) => {

    const { id, name, description, tags, demo, github } = props.data;

    return (
        <Box key={id} variants={Item}>
            <TitleContainer>
                {name}
            </TitleContainer>

            <DescriptionContainer>
                {description}
            </DescriptionContainer>

            <TagsContainer>
                {
                    tags.map((tag, id) => {
                        return <TagContainer key={id}> #{tag} </TagContainer>
                    })
                }
            </TagsContainer>

            <FooterContainer>
                <LinkContainer to={{ pathname: `${demo}` }} target="_blank">
                    Demo
                </LinkContainer>

                <GitHubContainer to={{ pathname: `${github}` }} target="_blank">
                    <GitHub width={50} height={50} />
                </GitHubContainer>
            </FooterContainer>

        </Box>
    )
}

export default PortfolioCard;