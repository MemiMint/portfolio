import React, { FC } from "react";
import { FormControl, Button, useToast } from "@chakra-ui/react";

export const FormButton: FC = (): JSX.Element => {
    const toast = useToast();

    return (
        <FormControl id="name" float="right">
            <Button
                variant="solid"
                bg="#0D74FF"
                color="white"
                _hover={{}}
                onClick={() => {
                    toast({
                        title: "Your email has been sent!",
                        status: "success",
                        duration: 2000,
                        position: "top-right"
                    })
                }}
            >
                Send Message
            </Button>
        </FormControl>
    )
}
