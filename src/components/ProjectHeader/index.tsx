import React, { FC } from "react";
import { Container, Text, Heading, Box } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const ProjectHeader: FC<IProps> = (props): JSX.Element => {
    return (
        <Box>
            <Heading fontSize="4xl" letterSpacing={0.8}>
                {props.header}
            </Heading>
            <Text mt={5} color="gray.400" fontSize="large" >
                {props.subheader}
            </Text>
        </Box>
    )
}