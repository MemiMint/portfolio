import React, { FC } from "react";
import { Icon } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const IconBox: FC<IProps> = (props): JSX.Element => {
    return (
        <Icon as={props.icon}
            w={{ base: "24", lg: "36" }}
            h={{ base: "24", lg: "36" }}
            p={{base: 4, lg: 8}}
            bg="white"
            borderRadius="md"
            boxShadow="md"
        />
    )
}