import React from "react";
import { NextPage } from "next";
import { Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { MetaHead, ProjectBody, ProjectAside, ProjectSidebar } from "../../components";
import { AiOutlineMenu } from "react-icons/ai"


const Project: NextPage = (): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <MetaHead title="blabla" meta={[]} />
            <Flex justifyContent="flex-end" display={{base: "flex", sm: "flex", md: "none", lg: "none"}} >
                <Icon m={6} as={AiOutlineMenu} w="6" h="6" color="black" onClick={onOpen} />
            </Flex>
            <Flex>
                <ProjectBody header="Testing this stuff" subheader="Testing this stuff subheader" body="Testing this stuff fucking body holy shet shet shets het shets hetse hste shte shte ste shte hste hste shets ehste h" />
                <ProjectAside />
                <ProjectSidebar isOpen={isOpen} onClose={onClose} />
            </Flex>
        </>
    )
}

export default Project;