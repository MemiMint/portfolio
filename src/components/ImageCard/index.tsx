import React, { FC } from "react";
import { Box, Image } from "@chakra-ui/react";
import { IProps } from "./IProps"

export const ImageCard: FC<IProps> = (props): JSX.Element => {
    const basicBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: '300px',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background: `url(https://yeferson-portfolio-api.herokuapp.com/uploads/${props.image}) center/cover no-repeat`,
    }

    return (
        <Box sx={basicBoxStyles} w={300} h={300} boxShadow="md" rounded="md" bg="white" onClick={props.onClick} />
    )
}