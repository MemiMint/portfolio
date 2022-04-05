import { Box, Container, HStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { ProjectCard } from "../ProjectCard";

export const ProjectList: FC = (props): JSX.Element => {
    return (
        <Container maxW="full" overflowX="auto" >
            <HStack>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </HStack>
        </Container>
    )
}