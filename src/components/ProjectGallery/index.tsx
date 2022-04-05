import React, { FC } from "react";
import { Box, Heading, Image, Wrap, WrapItem, Center } from "@chakra-ui/react";

export const ProjectGallery: FC = (): JSX.Element => {
    return (
        <Box mt={12} >
            <Heading fontSize="28px" letterSpacing={0.8} >
                Gallery
            </Heading>
            <Wrap mt={10} spacing={6} >
                <WrapItem>
                    <Image w="64" h="64" src="/me.jpg" />
                </WrapItem>
                <WrapItem>
                    <Image w="64" h="64" src="/me.jpg" />
                </WrapItem>
                <WrapItem>
                    <Image _hover={{
                        border: "2px solid",
                        borderColor: "blue"
                    }} w="64" h="64" src="/me.jpg" />
                </WrapItem>
                <WrapItem>
                    <Image w="64" h="64" src="/me.jpg" />
                </WrapItem>
                <WrapItem>
                    <Image w="64" h="64" src="/me.jpg" />
                </WrapItem>
            </Wrap>
        </Box>
    )
}
