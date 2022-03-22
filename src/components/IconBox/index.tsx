import React, { FC } from "react";
import { Icon } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const IconBox: FC<IProps> = (props): JSX.Element => {
    return (
        <Icon as={props.icon}
            w="36"
            h="36"
            p={8}
            bg="white"
            borderRadius="md"
            boxShadow="md"
        />
    )
}