import React, { FC } from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { NavBarLinkList } from "../NavLinkList"

/* Webpage Navbar */
export const NavBar: FC = (): JSX.Element => {
    return (
        <>
            <Box as="header" position="sticky" zIndex={10} top={0} px={[2, 6, 6]} py={2}>
                <Flex as="nav" flexDir="row" align="center">
                    <Logo />
                    <Spacer />
                    <NavBarLinkList />
                </Flex>
            </Box>
        </>
    )
}