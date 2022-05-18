import React from "react";
import { NextPage } from "next";
<<<<<<< HEAD
import { Box, CircularProgress } from "@chakra-ui/react"
import { useAppContext } from "../context"
import { MetaHead, NavBar, Hero, PersonalSkillSection, ProgrammingLanguageSection, FrameworkSection, DatabaseSection, ProjectSection, AboutMe, ContactMeSection } from "../components";
=======
import { Box } from "@chakra-ui/react"
import { MetaHead, NavBar, Hero, PersonalSkillSection, TechStackSection, ProjectSection, AboutMeSection, ContactMeSection, CertificateSection } from "../components";
>>>>>>> 1c2ab9ce3aeb44c313338773cea1bdd60f431439


const Index: NextPage = (): JSX.Element => {
    return (
        <Box maxW="full">
            <MetaHead title="Yeferson Hidalgo - Portfolio" meta={[{ name: "description", content: "Hi, my name is yeferson hidalgo and i am a full stack web developer" }]}/>
            <NavBar />
            <Hero />
            <PersonalSkillSection />
            <TechStackSection />
            <ProjectSection />
            <AboutMeSection />
            <CertificateSection />
            <ContactMeSection />
        </Box>
    )
}


export default Index;