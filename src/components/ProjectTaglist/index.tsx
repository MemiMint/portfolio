import React, { FC } from "react";
import { Box, Center, Heading, Wrap, WrapItem } from "@chakra-ui/react"
import { TechTag } from "../TechTag";
import { SiTypescript } from "react-icons/si";

export const ProjectTagList: FC = (): JSX.Element => {
    return (
        <Box textAlign="center" mt={{base: 8, sm: 8, md: 10, lg: 0}} >
            <Heading fontSize="28px" letterSpacing={0.8} >
                Tags
            </Heading>
            <Center mt={10} >
                <Wrap>
                    <WrapItem>
                        <TechTag icon={SiTypescript} label="Typescript" />
                    </WrapItem>
                    <WrapItem>
                        <TechTag icon={SiTypescript} label="Typescript" />
                    </WrapItem>
                    <WrapItem>
                        <TechTag icon={SiTypescript} label="Typescript" />
                    </WrapItem>
                </Wrap>
            </Center>
        </Box>
    )
}   