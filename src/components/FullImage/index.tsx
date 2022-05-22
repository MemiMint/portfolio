import React, { FC } from "react";
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const FullImage: FC<IProps> = (props): JSX.Element => {
    const imageUrl = `https://yeferson-portfolio-api.herokuapp.com/uploads/${props.image}`;

    return (
        <Flex pos="absolute" width={"100%"} height={"100%"} top={0} right={0} zIndex={2} bg='rgba(0, 0, 0, 0.8)' flexDir="column" alignItems="center" justifyContent="center" >
            <Box>
                <Image src={imageUrl} />
                <Flex my={4} w="100%" justifyContent="space-between" >
                    <Link fontSize="lg" color="white" href={imageUrl} target="_blank">Open in new tab</Link>
                    <Text fontSize="lg" color="white" onClick={props.toggleShow}>Close</Text>
                </Flex>
            </Box>
        </Flex>
    )
}