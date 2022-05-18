import React, { FC } from "react";
import { useAppContext } from "../../context";
import { Box } from "@chakra-ui/react";
import { CenterHeader } from "../CenterHeader";
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
