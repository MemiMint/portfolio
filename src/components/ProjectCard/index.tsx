import React, { FC } from "react"
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router"
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  HStack,
} from '@chakra-ui/react';
import { TechTag } from "../TechTag";
import { SiTypescript, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import { LinkWrapper } from "../Links/LinkWrapper"
import { IProps } from "./IProps";

export const ProjectCard: FC<IProps> = ({ id, thumbnail, title, description, tags }) => {
  return (
    <LinkWrapper href={`/project/${id}`}>
      <Center py={6}>
        <Box
          maxW={'445px'}
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
              src={`https://yeferson-portfolio-api.herokuapp.com/uploads/${thumbnail}`}
              layout={'fill'}
            />
          </Box>
          <Stack>
            <HStack spacing={4} >
              {
                tags.map((tag) => {
                  return (
                    <TechTag icon={SiTypescript} label={tag} />
                  );
                })
              }
            </HStack>
            <Heading
              color="gray.700"
              fontSize={{ base: "large", sm: "medium", lg: "2xl" }}
              fontFamily={'body'}
            >
              {title}
            </Heading>
            <Text color={'gray.500'} noOfLines={2} >
              {description}
            </Text>
          </Stack>
        </Box>
      </Center>
    </LinkWrapper>
  );
}