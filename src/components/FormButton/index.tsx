import React, { FC } from "react";
import { FormControl, Button } from "@chakra-ui/react";
import { IProps } from "./IProps"

export const FormButton: FC<IProps> = (props): JSX.Element => {
    return (
        <FormControl id="name" float="right">
            <Button
                variant="solid"
                bg="#0D74FF"
                color="white"
                onClick={props.onClick}
            >
                Send Message
            </Button>
        </FormControl>
    )
}
