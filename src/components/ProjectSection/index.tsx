import React, { FC } from "react";
import { useAppContext } from "../../context";
import { Box } from "@chakra-ui/react";
import { CenterHeader } from "../CenterHeader";
<<<<<<< HEAD
import { ProjectList } from "../ProjectList";
import { Loading } from "../Loading";

export const ProjectSection: FC = (): JSX.Element => {
  const { state } = useAppContext();

  return (
    <Box pos="relative" as="section" bg="gray.300" p={{ base: 2, lg: 8 }}>
      { !state.isLoading && <Loading /> }
      <CenterHeader color="black" text="Projects" />
      <ProjectList />
    </Box>
  );
};

=======
import { ProjectList } from "../ProjectList"
import { ProjectCard } from "../ProjectCard";

export const ProjectSection: FC = (): JSX.Element => {
    return (
        <Box id="projects" as="section" bg="gray.300" p={{ base: 2, lg: 8 }} >
            <CenterHeader color="black" text="Projects" />
            <ProjectList />
        </Box>
    )
}
>>>>>>> 1c2ab9ce3aeb44c313338773cea1bdd60f431439
