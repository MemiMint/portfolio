import React, { FC } from "react";
import { Box, Icon, Text, HStack } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai"

export const SideBarlink: FC = (): JSX.Element => {
    return (
        <Box p={2} border="2px" borderColor="black" color="black" borderRadius="md" >
            <HStack >
                <Icon w={6} h={6} as={AiOutlineHome} />
                <Text fontWeight="medium" fontSize={14} >
                    About Me
                </Text>
            </HStack>
        </Box>
    )
}