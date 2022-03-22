import React, { FC } from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react"
import { SkillBoxList } from "../SkillBoxList"
import { CenterHeader } from "../CenterHeader";

export const PersonalSkillSection: FC = (): JSX.Element => {
    return (
        <Box bg="gray.300" p={4} >
            <CenterHeader text="Personal Skills" />
            <SkillBoxList />
        </Box>
    )
}