import React from "react";
import { NextPage } from "next";
import { Container, Flex, Spacer, Box, Heading, Text, HStack, Image } from "@chakra-ui/react"
import { MetaHead } from "../components/MetaHead"


const Index: NextPage = (): JSX.Element => {
    return (
        <Box>
            <MetaHead title="Yeferson Hidalgo - Portfolio" meta={[{ name: "description", content: "Hi, my name is yeferson hidalgo and i am a full stack web developer"}]} />
            <Box w="100vw">
                <Flex alignItems="center" p={4} >
                    <Image src="/logo.png" boxSize="100px" objectFit="cover" alt="logo" />
                    <Spacer />
                    <HStack spacing="24px" >
                        <Text>Home</Text>
                        <Text>About</Text>
                        <Text>Projects</Text>
                        <Box p={2} bg="black" borderRadius="sm" >
                            <Text color="white" fontSize="bold">Contact Me</Text>
                        </Box>
                    </HStack>
                </Flex>
            </Box>
        </Box>
    )
}

export default Index;