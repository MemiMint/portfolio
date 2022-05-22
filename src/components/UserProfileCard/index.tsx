import React, { FC } from "react";
import { Box, Flex, Spacer, HStack  } from "@chakra-ui/react";
import { UserProfile } from "../UserProfile";
import { Resume } from "../Resume";
import { FlagVE } from "../FlagVe";
import { Blob } from "../Blob";
import { IconLink } from "../Links/IconLink";
import { SiGithub, SiLinkedin } from "react-icons/si"

const RESUME = `
Fullstack web developer specialized mostly in frontend with modern technologies
such as React, Vue, Typescript, Redux, and Tailwind. I've been developing web
applications to various clients via freelancing. Hoping to earn more work
experience to become a better developer
`

export const UserProfileCard: FC = (): JSX.Element => {
    return (
        <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
            <Blob
                w={'150%'}
                h={'150%'}
                position={'absolute'}
                top={'-20%'}
                left={0}
                zIndex={-1}
                visibility={{ base: "hidden", sm: "hidden", md: "hidden", lg: "visible" }}
            />
            <Box
                position={'relative'}
                bg="white"
                maxW={"700px"}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}
                p={4}
            >
                <Flex>
                    <UserProfile fullname="Yeferson Hidalgo" age={21} />
                    <Spacer />
                    <FlagVE />
                </Flex>
                <Resume text={RESUME} />
                <Flex mt={{base: 5, sm: 5, md: 10, lg: 10}} justifyContent="flex-end" px={6} >
                    <HStack spacing={4} >
                        <IconLink icon={SiGithub} tooltip="Github" href="https://github.com/MemiMint"  text="" />
                        <IconLink icon={SiLinkedin} tooltip="Linkedin" color="#0077b5" href="https://www.linkedin.com/in/yeferson-moises-hidalgo-quintana-69158a236/" text="" />
                    </HStack>
                </Flex>
            </Box>
    </Flex>
    )
}
