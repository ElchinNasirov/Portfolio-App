import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import img from "../assets/images/blog-wp.jpg";
import Logo from '../subComponents/Logo';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import Blog from './Blog';
import BigTitle from '../subComponents/BigTitle';
import { Blogs } from "../data/BlogData";

const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`

const SubContainer = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`

const CenterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`
const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

// Framer-motion config
const framerMotion = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}

const BlogsList = () => {
    return (

        <MainContainer
            variants={framerMotion}
            initial='hidden'
            animate='show'
            exit={{
                opacity: 0, transition: { duration: 0.5 }
            }}
        >
            <SubContainer>

                <CenterContainer>
                    <GridContainer>
                        {
                            Blogs.map(blog => {
                                return <Blog key={blog.id} blog={blog} />
                            })
                        }
                    </GridContainer>
                </CenterContainer>

                <BigTitle text="BLOG" top="5rem" left="5rem" />
            </SubContainer>
        </MainContainer>
    )
}

export default BlogsList;