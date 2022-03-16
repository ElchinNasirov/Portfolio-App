import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
`

const PortfolioCard = () => {
    return (
        <Box>
            Porfolio Component
        </Box>
    )
}

export default PortfolioCard;