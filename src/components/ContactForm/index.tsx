import React, { FC } from "react";
import { WrapItem, VStack, Box } from "@chakra-ui/react"
import { FormInput } from "../FormInput"
import { FormButton } from "../FormButton"
import { FormTextArea } from "../FormTextArea";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from 'react-icons/bs';

export const ContactForm: FC = (): JSX.Element => {
    return (
        <WrapItem>
            <Box bg="white" borderRadius="md" boxShadow="md" >
                <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                        <FormInput label="Your name" icon={BsPerson} />
                        <FormInput label="Email" icon={MdOutlineEmail} />
                        <FormTextArea />
                        <FormButton />
                    </VStack>
                </Box>
            </Box>
        </WrapItem>
    )
}