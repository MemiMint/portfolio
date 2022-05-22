import React, { FC } from "react";
import { Flex, VStack, Spacer, Button } from "@chakra-ui/react";
import { ProjectTagList } from "../ProjectTaglist"
import { ProjectSource } from "../ProjectSource"
import { IProps } from "./IProps";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { ButtonLink } from "../Links/ButtonLink";

export const ProjectAside: FC<IProps> = (props): JSX.Element => {
    return (
        <Flex 
            as="aside" 
            display={{base: "none", sm: "none", md: "flex", lg: "flex"}} 
            flexDir="column" w={{base: "20", sm: "20", md: "40", lg: "80"}} 
            borderLeft="2px solid" 
            borderColor="gray.200" 
            zIndex={1} top={0} 
            px={[2, 6, 6]} 
            py={10} 
            textAlign="center" 
        >
            <VStack>
                <ProjectTagList tags={props.tags} />
                <ProjectSource repo={props.repo} />
            </VStack>
            <Spacer />
            <ButtonLink icon={AiOutlineArrowLeft} href="/" text="return" />
        </Flex>
        
    )
}