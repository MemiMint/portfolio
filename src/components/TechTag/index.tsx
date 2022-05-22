import React, { FC } from "react";
import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { AiFillTag } from "react-icons/ai";
import { IProps } from "./IProps";

export const TechTag: FC<IProps> = (props): JSX.Element => {
    return (
        <Tag size="md" variant="subtle" colorScheme="teal" >
            <TagLeftIcon as={AiFillTag} />
            <TagLabel>
                {props.label}
            </TagLabel>
        </Tag>
    )
}