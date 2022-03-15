import React, { Component } from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import assets from "../assets";

const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`

class Multi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: assets,
            loading: false
        };
    }

    render() {
        return (
            <Box>
                <Particles
                    className="demo"
                    params={{
                        particles: {
                            number: {
                                value: 20,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            },
                            line_linked: {
                                enable: false
                            },
                            move: {
                                speed: 0.5,
                                out_mode: "out"
                            },
                            shape: {
                                type: ["images"],
                                images: this.state.images.map(img => ({
                                    src: img,
                                    height: 100,
                                    width: 100
                                }))
                            },
                            size: {
                                value: 30,
                                random: false,
                                anim: {
                                    enable: true,
                                    speed: 2,
                                    size_min: 10,
                                    sync: false
                                }
                            }
                        },
                        retina_detect: false
                    }}
                />
            </Box>
        );
    }
}

export { Multi };