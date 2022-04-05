import React, { FC } from "react";
import { Container, Text } from "@chakra-ui/react";
import { ProjectHeader } from "../ProjectHeader"
import { ProjectGallery } from "../ProjectGallery"
import { IProps } from "./IProps";

export const ProjectBody: FC<IProps> = (props): JSX.Element => {
    return (
        <Container maxW="7xl" mt={{ base: 5, sm: 5, md: 10, lg: 12 }} textAlign="center" >
            <ProjectHeader header={props.header} subheader={props.subheader} />
            <Container mt={12} >
                <Text fontSize="larger" >
                    {props.body}
                </Text>
            </Container>
            <ProjectGallery  />
        </Container>
    )
}