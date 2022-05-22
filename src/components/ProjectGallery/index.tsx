import React, { FC } from "react";
import { Box, SimpleGrid, Heading, Wrap, Image, WrapItem, Center } from "@chakra-ui/react";
import { ProjectImage } from "../ProjectImage";
import { IProps } from "./IProps"

export const ProjectGallery: FC<IProps> = (props): JSX.Element => {
    return (
        <SimpleGrid my={10} columns={4} spacing="40px" >
            {
                props.gallery.map((image, index): JSX.Element => {
                    return (
                        <ProjectImage image={image} key={index} />
                    );
                })
            }
        </SimpleGrid>
    )
}
