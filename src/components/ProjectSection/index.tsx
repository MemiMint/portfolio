import React, { FC } from "react";
import { Box, Stack } from "@chakra-ui/react"
import { CenterHeader } from "../CenterHeader";
import { Carrousel } from "../Carrousel"
import { ProjectCard } from "../ProjectCard";

export const ProjectSection: FC = (): JSX.Element => {
    return (
        <Box as="section" bg="gray.300" p={{ base: 2, lg: 8 }} >
            <CenterHeader color="black" text="Projects" />
            <Carrousel />
        </Box>
    )
}