import React, { FC } from "react"
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  HStack,
} from '@chakra-ui/react';
import { TechTag } from "../TechTag";
import { LinkWrapper } from "../Links/LinkWrapper"
import { SiTypescript, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

export const ProjectCard: FC = () => {
  return (
    <LinkWrapper href="/project/412412" >
      <Center py={6}>
        <Box
          maxW={{ base: "345px", lg: "445px" }}
          w={'full'}
          bg={"white"}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              loader={({ src }) => src}
              src={
                'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              layout={'fill'}
            />
          </Box>
          <Stack>
            <HStack spacing={4} >
              <TechTag icon={SiTypescript} label="Typescript" />
              <TechTag icon={SiNodedotjs} label="NodeJS" />
              <TechTag icon={SiExpress} label="Express" />
              <TechTag icon={SiMongodb} label="MongoDB" />
            </HStack>
            <Heading
              color="gray.700"
              fontSize={{ base: "large", sm: "medium", lg: "2xl" }}
              fontFamily={'body'}>
              Boost your conversion rate
            </Heading>
            <Text color={'gray.500'} noOfLines={2} >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum.
            </Text>
          </Stack>
        </Box>
      </Center>
    </LinkWrapper>
  );
}