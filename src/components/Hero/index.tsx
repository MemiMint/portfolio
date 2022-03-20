import React, { FC } from "react";
import { Container, Stack } from "@chakra-ui/react";
import { UserProfileCard } from "../UserProfileCard";
import { UnderlineHeader } from "../UnderLineHeader";
import { BackgroundHeader } from "../BackgroundHeader";

export const Hero: FC = (): JSX.Element => {
    return (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <UnderlineHeader text="Yeferson Hidalgo" />
                    <BackgroundHeader text="Fullstack Web Developer" />
                </Stack>
                <UserProfileCard />
            </Stack>
        </Container>
    )
}