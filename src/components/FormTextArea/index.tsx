import React, { FC } from "react";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { IProps } from "./IProps"

export const FormTextArea: FC<IProps> = (props): JSX.Element => {
    return (
        <FormControl id="name">
            <FormLabel>Message</FormLabel>
            <Textarea
                borderColor="gray.300"
                _hover={{
                    borderRadius: 'gray.300',
                }}
                placeholder="message"
                onChange={props.onChange}
            />
        </FormControl>
    )
}