import React, { FC } from "react";
import { HStack } from "@chakra-ui/react"
import { NavBarLink } from "../NavbarLink";
import { links } from "./links";

export const NavBarLinkList: FC = (): JSX.Element => {
    return (
        <HStack spacing="10" >
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