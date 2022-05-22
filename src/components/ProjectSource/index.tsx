import React, { FC } from "react";
import { Box, Heading, Link, Text, HStack, VStack } from "@chakra-ui/react";
import { IconLink } from "../Links/IconLink"
import { SiGithub } from "react-icons/si"
import { IProps } from "./IProps"

export const ProjectSource: FC<IProps> = (props): JSX.Element => {
    return (
        <Box textAlign="center" >
            <Heading fontSize="28px" letterSpacing={0.8} mt={12}>
                Source Code
            </Heading>
            <VStack mt={8} spacing={4} >
                <IconLink icon={SiGithub} href={props.repo} text="Source Code" />
            </VStack>
        </Box>
    )
}