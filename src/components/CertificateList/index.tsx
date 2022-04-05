import React, { FC } from "react";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { CertificateDownloadCard } from "../CertificateDownloadCard";
import { certificates } from "./list";

export const CertificateList: FC = (): JSX.Element => {
    return (
        <Center mt={8} >
            <Wrap spacing={4} >
                {
                    certificates.map((certificate, index): JSX.Element => {
                        return (
                            <WrapItem>
                                <CertificateDownloadCard key={index} image={certificate.image} filename={certificate.filename} />
                            </WrapItem>
                        )
                    })
                }
            </Wrap>
        </Center>
    )
}