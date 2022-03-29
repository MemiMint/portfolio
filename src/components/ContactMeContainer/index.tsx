import React, { FC } from "react";
import { Box, Container, Flex, Wrap } from "@chakra-ui/react";

export const ContactMeContainer: FC = (props): JSX.Element => {
    return (
        <Container as="section" bg="white" maxW="full" mt={0} centerContent overflow="hidden"  >
            <Flex>
                <Box
                    bg="black"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            {props.children}
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}