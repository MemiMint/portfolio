import React, { FC } from "react";
import { Box, Container } from "@chakra-ui/react";
import { TechBoxList } from "../TechBoxList";
import { CenterHeader } from "../CenterHeader";
import { IProps } from "./IProps";

export const TechSection: FC<IProps> = (props): JSX.Element => {
  return (
    <Box
      id={props.id}
      as="section"
      p={{ base: 0, sm: 2, md: 4, lg: 8 }}
      bg={props.backgroundColor}
    >
      <CenterHeader color={props.header.color} text={props.header.text} />
      <TechBoxList data={props.data} />
    </Box>
  );
};

