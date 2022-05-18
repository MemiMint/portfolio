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
import { IProps } from "./IProps";

export const ProjectCard: FC<IProps> = ({ thumbnail, title, description, tags }) => {
  return (
    <LinkWrapper href="/project/412412" >
      <Center py={6}>
        <Box>
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              loader={({ src }) => src}
              src={thumbnail}
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