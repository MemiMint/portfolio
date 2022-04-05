import React, { FC } from "react";
import { WrapItem, VStack, Box } from "@chakra-ui/react"
import { FormInput } from "../FormInput"
import { FormButton } from "../FormButton"
import { FormTextArea } from "../FormTextArea";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from 'react-icons/bs';
import { useContactForm } from "./hook";

export const ContactForm: FC = (): JSX.Element => {
    const { state, onChange, onFocus, onClick } = useContactForm()

    return (
        <WrapItem>
            <Box bg="white" borderRadius="md" boxShadow="md" >
                <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                        <FormInput name="name" value={state.name} label="Your name" icon={BsPerson} error={state.error} onFocus={onFocus} onChange={onChange} />
                        <FormInput name="email" value={state.email} label="Email" icon={MdOutlineEmail} error={state.error} onFocus={onFocus} onChange={onChange} />
                        <FormTextArea name="message" value={state.message} onChange={onChange} />
                        <FormButton onClick={onClick} />
                    </VStack>
                </Box>
            </Box>
        </WrapItem>
    )
}