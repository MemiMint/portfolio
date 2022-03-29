import React, { FC } from "react";
import { Box, Wrap, WrapItem, VStack, HStack, Button, Icon, Heading, Text } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"
import { ContactHeader } from "../ContactHeader"
import { ContactInfoList } from "../ContactInfoList"

export const ContactInfo: FC = () => {
    return (
        <WrapItem>
            <Box>
                <ContactHeader />
                <ContactInfoList />
            </Box>
        </WrapItem>
    )
}