import React, { FC } from "react";
import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const TechTag: FC<IProps> = (props): JSX.Element => {
    return (
        <Tag size="md" variant="subtle" colorScheme="teal" >
            <TagLeftIcon as={props.icon} />
            <TagLabel>
                {props.label}
            </TagLabel>
        </Tag>
    )
}