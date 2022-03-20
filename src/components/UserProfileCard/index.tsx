import React, { FC } from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { UserProfile } from "../UserProfile";
import { Resume } from "../Resume";
import { FlagVE } from "../FlagVe";
import { Blob } from "../Blob";

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
                height={'300px'}
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
            </Box>
    </Flex>
    )
}
