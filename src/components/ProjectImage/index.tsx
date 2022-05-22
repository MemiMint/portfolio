import React, { FC } from "react";
import { WrapItem, Image} from "@chakra-ui/react";
import { FullImage } from "../FullImage";
import { useProjectImage } from "./hook"
import { IProps } from "./IProps";
import { ImageCard } from "../ImageCard";

export const ProjectImage: FC<IProps> = (props): JSX.Element => {
    const { show, toggleShow } = useProjectImage();

    return (
        <>
            <ImageCard image={props.image} onClick={toggleShow} />
            { show && <FullImage image={props.image} show={show} toggleShow={toggleShow} /> }
        </>
    )
}