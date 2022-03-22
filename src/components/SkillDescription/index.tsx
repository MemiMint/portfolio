import React, { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const SkillDescription: FC<IProps> = (props): JSX.Element => {
    return (
        <Box>
            <Heading as="h4" mb={4} >
                {props.header}
            </Heading>
            <Text>
                {props.description}
            </Text>
        </Box>
    )
}