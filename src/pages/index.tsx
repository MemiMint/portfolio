import React from "react";
import { NextPage } from "next";
import { Box, CircularProgress } from "@chakra-ui/react"
import { useAppContext } from "../context"
import { MetaHead, NavBar, Hero, PersonalSkillSection, ProgrammingLanguageSection, FrameworkSection, DatabaseSection, ProjectSection, AboutMe, ContactMeSection } from "../components";


const Index: NextPage = (): JSX.Element => {
    return (
        <Box maxW="full">
            <MetaHead title="Yeferson Hidalgo - Portfolio" meta={[{ name: "description", content: "Hi, my name is yeferson hidalgo and i am a full stack web developer" }]}/>
            <NavBar />
            <Hero />
            <PersonalSkillSection />
            <ProgrammingLanguageSection />
            <FrameworkSection />
            <DatabaseSection />
            <ProjectSection />
            <AboutMe />
            <ContactMeSection />
        </Box>
    )
}


export default Index;