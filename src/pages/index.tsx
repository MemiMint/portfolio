import React from "react";
import { NextPage } from "next";
import { Box, } from "@chakra-ui/react"
import { MetaHead, NavBar, Hero, PersonalSkillSection, ProjectSection, ContactMeSection } from "../components";

const Index: NextPage = (): JSX.Element => {
    return (
        <Box maxW="full">
            <MetaHead title="Yeferson Hidalgo - Portfolio" meta={[{ name: "description", content: "Hi, my name is yeferson hidalgo and i am a full stack web developer" }]}/>
            <NavBar />
            <Hero />
            <PersonalSkillSection />
            <ProjectSection />
            <ContactMeSection />
        </Box>
    )
}


export default Index;