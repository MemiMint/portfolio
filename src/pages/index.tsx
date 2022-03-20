import React from "react";
import { NextPage } from "next";
import { MetaHead, NavBar, Hero } from "../components";
import { Center, Box, Heading, Text, Wrap, WrapItem, Stack } from "@chakra-ui/react";


const Index: NextPage = (): JSX.Element => {
    return (
        <>
            <MetaHead title="Yeferson Hidalgo - Portfolio" meta={[{ name: "description", content: "Hi, my name is yeferson hidalgo and i am a full stack web developer"}]} />
            <NavBar />
            <Hero />
            <Box h="40vh" bg="gray.300" p={4} >
                <Center>
                    <Heading as="h1" fontSize="5xl" >
                        <Text>
                            Personal Skills
                        </Text>
                    </Heading>
                </Center>
                <Center>
                    <Stack mt={20}>
                        <Wrap spacing={20} >
                            <WrapItem>
                                <Box w={120} h={120} bg="white" />
                            </WrapItem>
                            <WrapItem>
                                <Box w={120} h={120} bg="white" />
                            </WrapItem>
                            <WrapItem>
                                <Box w={120} h={120} bg="white" />
                            </WrapItem>
                            <WrapItem>
                                <Box w={120} h={120} bg="white" />
                            </WrapItem>
                        </Wrap>
                    </Stack>
                </Center>
            </Box>
        </>
    )
}

export default Index;