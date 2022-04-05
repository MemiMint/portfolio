import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { CenterHeader } from "../CenterHeader";
import { CertificateList } from "../CertificateList"

export const CertificateSection: FC = (): JSX.Element => {
    return (
        <Box id="certificates" as="section" bg="gray.300" p={{ base: 2, lg: 8 }} >
            <CenterHeader color="black" text="Certificates" />
            <CertificateList />
        </Box>   
    )
}