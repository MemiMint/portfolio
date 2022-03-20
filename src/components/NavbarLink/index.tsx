import React, { FC } from "react";
import NextLink from "next/link"
import { Link } from "@chakra-ui/react"
import { IProps } from "./IProps";

export const NavBarLink: FC<IProps> = (props): JSX.Element => {
    return (
        <NextLink href={props.href} passHref >
            <Link 
                fontSize={16} 
                fontWeight="normal" 
                _hover={{textDecoration: "none"}}
                color={props.hasBackground && "white"}
                p={props.hasBackground && 2} 
                bg={props.hasBackground && "black"}
            >
                {props.text}
            </Link>
        </NextLink>
    )
}