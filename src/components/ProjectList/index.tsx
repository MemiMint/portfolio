<<<<<<< HEAD
import React, { FC } from "react";
import { HStack } from "@chakra-ui/react";
import { useAppContext } from "../../context";
import { ProjectCard } from "../ProjectCard";

export const ProjectList: FC = (props): JSX.Element => {
  const { state } = useAppContext();

  return (
    <HStack spacing={10} overflowX="scroll">
      {
        state.projects.map((project): JSX.Element => {
          return (
            <ProjectCard thumbnail={project.gallery[0]} title={project.title} description={project.description} tags={project.tags} />
          )
        })
      }
    </HStack>
  );
};
=======
import { Box, Container, HStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { ProjectCard } from "../ProjectCard";

export const ProjectList: FC = (props): JSX.Element => {
    return (
        <Container maxW="full" overflowX="auto" >
            <HStack>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </HStack>
        </Container>
    )
}
>>>>>>> 1c2ab9ce3aeb44c313338773cea1bdd60f431439
