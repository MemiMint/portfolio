import React, { FC } from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { ILink } from "../IProps"

export const LinkWrapper: FC<ILink> = (props): JSX.Element => {
    return (
        <NextLink href={props.href} passHref >
            <Link _hover={{
                textDecoration: "none"
            }} >
                { props.children }
            </Link>
        </NextLink>
    )
}