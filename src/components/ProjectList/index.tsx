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
            <ProjectCard id={project._id} thumbnail={project.gallery[0]} title={project.title} description={project.description} tags={project.tags} />
          )
        })
      }
    </HStack>
  );
};
