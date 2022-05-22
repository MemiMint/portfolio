import React, { FC } from "react";
import { Box, Center, Heading, Wrap, WrapItem } from "@chakra-ui/react"
import { TechTag } from "../TechTag";
import { SiTypescript } from "react-icons/si";
import { IProps } from "./IProps"

export const ProjectTagList: FC<IProps> = (props): JSX.Element => {
    return (
        <Box textAlign="center" mt={{base: 8, sm: 8, md: 10, lg: 0}} >
            <Heading fontSize="28px" letterSpacing={0.8} >
                Tags
            </Heading>
            <Center mt={10} >
                <Wrap>
                    {
                        props.tags.map((tag) => {
                            return (
                                <WrapItem>
                                    <TechTag icon={SiTypescript} label={tag} />
                                </WrapItem>
                            )
                        })
                    }
                </Wrap>
            </Center>
        </Box>
    )
}   