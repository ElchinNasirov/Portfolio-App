import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

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



const PortfolioCard = () => {
    return (
        <Box>
            Porfolio Component
        </Box>
    )
}

export default PortfolioCard;