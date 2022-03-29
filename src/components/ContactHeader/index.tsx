import React, { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const ContactHeader: FC = (): JSX.Element => {
    return (
        <Box>
            <Heading>Contact Me</Heading>
            <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                Fill up the form below to contact
            </Text>
        </Box>
    )
}