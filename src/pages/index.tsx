import React from "react";
import { NextPage } from "next";
import { MetaHead, NavBar, Hero, PersonalSkillSection, IconBox } from "../components";
import { Center, Container, Box, Heading, Text, Flex, Icon, VStack, HStack } from "@chakra-ui/react";
import { SiTypescript, SiCsharp, SiJavascript } from "react-icons/si";

const Index: NextPage = (): JSX.Element => {
    return (
        <>
            <MetaHead title="Yeferson Hidalgo - Portfolio" meta={[{ name: "description", content: "Hi, my name is yeferson hidalgo and i am a full stack web developer"}]} />
            <NavBar />
            <Hero />
            <PersonalSkillSection />
            <Box p={12}>
                <Center>
                    <Heading>
                        <Text>
                            Programming Language
                        </Text>
                    </Heading>
                </Center>
                <Center>
                    <HStack spacing={10} >
                        <Box
                            w="36"
                            h="36"
                            bg="green"
                            borderRadius="md"
                            boxShadow="md"
                            _hover={{
                                backgroundColor: "#007acc",
                                color: "white"
                            }}
                        >
                            <Center my={6} >
                                <Icon as={SiTypescript} w="14" h="14" />
                            </Center>
                            <Center>
                                <Text fontWeight="medium" >
                                    Typescript
                                </Text>
                            </Center>
                        </Box>
                        <Box
                            w="36"
                            h="36"
                            bg="green"
                            borderRadius="md"
                            boxShadow="md"
                            _hover={{
                                backgroundColor: "#007acc",
                                color: "white"
                            }}
                        >
                            <Center my={6} >
                                <Icon as={SiCsharp} w="14" h="14" />
                            </Center>
                            <Center>
                                <Text fontWeight="medium" >
                                    Typescript
                                </Text>
                            </Center>
                        </Box>
                        <Box
                            w="36"
                            h="36"
                            bg="green"
                            borderRadius="md"
                            boxShadow="md"
                            _hover={{
                                backgroundColor: "#007acc",
                                color: "white"
                            }}
                        >
                            <Center my={6} >
                                <Icon as={SiJavascript} w="14" h="14" />
                            </Center>
                            <Center>
                                <Text fontWeight="medium" >
                                    Javascript
                                </Text>
                            </Center>
                        </Box>
                    </HStack>
                </Center>
            </Box>
        </>
    )
}

export default Index;