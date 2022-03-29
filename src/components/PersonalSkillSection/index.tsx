import React, { FC } from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react"
import { SkillBoxList } from "../SkillBoxList"
import { CenterHeader } from "../CenterHeader";

export const PersonalSkillSection: FC = (): JSX.Element => {
    return (
        <Box id="personal-skill" as="section" bg="black" p={4} >
            <CenterHeader color="white" text="Personal Skills" />
            <SkillBoxList />
        </Box>
    )
}