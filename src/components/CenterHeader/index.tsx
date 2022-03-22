import React, { FC } from "react";
import { Center, Heading, Text } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const CenterHeader: FC<IProps> = (props): JSX.Element => {
    return (
        <Center mt="12" >
            <Heading as="h1" fontSize="5xl" >
                <Text>
                    {props.text}
                </Text>
            </Heading>
        </Center>
    )
}