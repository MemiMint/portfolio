import React, { FC } from "react";
import { Box, Container, Center, Text, Image, Stack } from "@chakra-ui/react";
import { CenterHeader } from "../CenterHeader";

const text = `
    I'm Yeferson hidalgo, a fullstack developer. 
    I've been working with multiple clients since I started learning programming when I was 17. 
    At 18 years old I worked as an intern in Norkut, a retail tech solution company that works with national enterprises. 
    I've developed within a team as software intern that managed the contact of their homepage such as blogs and their top employees, 
    I was in charge of both backend and frontend. I really loved working for them but sadly the internship ended and I had to move on with my life. 
    A few days later a friend of mine contacted me to work with him in his thesis project: A paint management app that allows you to keep track of the paints, 
    employees, and materials used in a construction site called Surfaceo. 
    It was made using React Native as frontend and Go as the backend. 
    I worked with him during the lapse of one or two months. 
    Once the I finished working with him I started making personal projects 
    to show on my portfolio and that's what I've been doing from now on although sometimes people contact me to develop their thesis projects. 
    My hobbies includes fitness-related stuff, technology, language, and sports.
`

export const AboutMe: FC = (): JSX.Element => {
    return (
        <Box as="section" bg="black" px={8} pt={8} pb={10} >
            <CenterHeader color="white" text="A little about me" />
            <Center px={8} color="white">
                <Text fontSize={{ base: "13", md: "16", lg: "18" }} >
                    {text}
                </Text>
            </Center>
        </Box>
    )
}