import React, { FC } from "react";
import { VStack, HStack, Heading, Text, Avatar } from "@chakra-ui/react";
import { IProps } from "./IProps"

export const UserProfile: FC<IProps> =  (props): JSX.Element => {
    return (
        <HStack spacing={2} >
            <Avatar src="/me.jpg" size="lg" />
            <VStack alignItems="start" >
                <Heading as="h4" fontSize="md" fontWeight="bold">
                    <Text>
                        {props.fullname}
                    </Text>
                </Heading>
                <Heading as="h4" fontSize="sm" fontWeight="medium" color="gray.500" >
                    <Text>
                        {props.age} years old
                    </Text>
                </Heading>
            </VStack>
        </HStack>
    )
}