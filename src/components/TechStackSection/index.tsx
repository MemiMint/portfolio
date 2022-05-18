import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { ProgrammingLanguageSection } from "../ProgrammingLanguageSection"
import { FrameworkSection } from "../FrameworkSection";
import { DatabaseSection } from "../DatabasesSection"

export const TechStackSection: FC = (): JSX.Element => {
    return (
        <Box id="tech-stack" >
            <ProgrammingLanguageSection />
            <FrameworkSection />
            <DatabaseSection />
        </Box>
    )
}