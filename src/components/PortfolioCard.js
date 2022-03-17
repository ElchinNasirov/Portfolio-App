import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
padding:0.5rem calc(2rem + 2vw);
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};

}
`

const PortfolioCard = () => {
    return (
        <Box>
            <TitleContainer>
                Title goes here
            </TitleContainer>
            <DescriptionContainer>
                Description goes here
            </DescriptionContainer>
            <LinkContainer to={{}} target="_blank" >
                Link
            </LinkContainer>

        </Box>
    )
}

export default PortfolioCard;