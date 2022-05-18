import React, { FC } from "react";
import { Box, Image, Center, Text, Flex, Link, Icon, HStack } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai"
import { IProps } from "./IProps";

export const CertificateDownloadCard: FC<IProps> = (props): JSX.Element => {
    return (
        <Center>
            <Box
                maxW={{ base: "345px", lg: "445px" }}
                w={'full'}
                bg={"white"}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
                position="relative"
            >
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image src={`/${props.image}`} />
                </Box>
                <Flex alignItems="center" justifyContent="space-between" position="absolute" w="full" h="12" bottom={0} left={0} bg="gray.200" px={2}>
                    <Text fontWeight="medium" isTruncated >
                        { props.filename }.pdf
                    </Text>
                    <Link href={`/pdf/${props.filename}.pdf`} download >
                        <Icon as={AiOutlineDownload} w="6" h="6" />
                    </Link>
                </Flex>
            </Box>
        </Center>
    )
}