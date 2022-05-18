import React, { FC } from "react";
import { FormControl, Button, useToast } from "@chakra-ui/react";
import { IProps } from "./IProps"

export const FormButton: FC<IProps> = (props): JSX.Element => {
    const toast = useToast();

    return (
        <FormControl id="name" float="right">
            <Button
                variant="solid"
                bg="#0D74FF"
                color="white"
                _hover={{}}
                onClick={props.onClick}
            >
                Send Message
            </Button>
        </FormControl>
    )
}
