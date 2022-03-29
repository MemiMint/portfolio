import React, { FC } from "react";
import { FormControl, FormLabel, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const FormInput: FC<IProps> = (props): JSX.Element => {
    return (
        <FormControl id="name">
            <FormLabel>{props.label}</FormLabel>
            <FormLabel color="red" fontSize="small">*Field cannot be empty</FormLabel>
            <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                    pointerEvents="none"
                    children={<props.icon color="gray.800" />}
                />
                <Input type="text" size="md" onChange={props.onChange} />
            </InputGroup>
        </FormControl>
    )
}