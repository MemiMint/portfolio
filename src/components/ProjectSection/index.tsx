import React, { FC } from "react";
import { Box, Stack } from "@chakra-ui/react"
import { CenterHeader } from "../CenterHeader";
import { ProjectList } from "../ProjectList"
import { ProjectCard } from "../ProjectCard";

export const ProjectSection: FC = (): JSX.Element => {
    return (
        <Box id="projects" as="section" bg="gray.300" p={{ base: 2, lg: 8 }} >
            <CenterHeader color="black" text="Projects" />
            <ProjectList />
        </Box>
    )
}