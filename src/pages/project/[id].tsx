import React from "react";
import { NextPage } from "next";
import { Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { MetaHead, ProjectBody, ProjectAside, ProjectSidebar } from "../../components";
import { AiOutlineMenu } from "react-icons/ai"
import { IProject } from "../../types";
import { ProjectService } from "../../services";

const Project: NextPage<any> = ({ props }): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <MetaHead title={props.project.title} meta={[]} />
            <Flex justifyContent="flex-end" display={{base: "flex", sm: "flex", md: "none", lg: "none"}} >
                <Icon m={6} as={AiOutlineMenu} w="6" h="6" color="black" onClick={onOpen} />
            </Flex>
            <Flex position="relative" >
                <ProjectBody header={props.project.title} subheader={props.project.subtitle} body={props.project.description} gallery={props.project.gallery} />
                <ProjectAside repo={props.project.link} tags={props.project.tags} />
                <ProjectSidebar repo={props.project.repo} tags={props.project.tags} isOpen={isOpen} onClose={onClose} />
            </Flex>
        </>
    )
}

Project.getInitialProps = async ({ query }) => {
    const { id } = query;
    const services: ProjectService = new ProjectService();
    
    const project: IProject = await services.GetProject(id as string);

    return {
        props: {
            project
        }
    }
}

export default Project;