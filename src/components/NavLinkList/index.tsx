import React, { FC } from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { NavBarLink } from "../NavbarLink";
import { links } from "./links";
import { AiOutlineMenu } from "react-icons/ai"

export const NavBarLinkList: FC = (): JSX.Element => {
    return (
        <HStack display={{ base: "none", sm: "none", md: "none", lg: "block" }} spacing="10" >
            {
                links.map((link, index): JSX.Element => {
                    return (
                        <NavBarLink  
                            key={index}
                            href={link.href}
                            text={link.text}
                            hasBackground={link.hasBackground}
                        />
                    )
                })
            }
        </HStack>
    )
}