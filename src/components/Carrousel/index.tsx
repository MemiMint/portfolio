import { Box, Container } from "@chakra-ui/react";
import React, { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"
import { ProjectCard } from "../ProjectCard";

export const Carrousel: FC = (props): JSX.Element => {
    return (
        <Container maxW="full" >
            <Carousel autoPlay >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Carousel>
        </Container>
    )
}