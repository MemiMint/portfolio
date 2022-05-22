import React, { FC } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerFooter,
    VStack,
    Button
} from "@chakra-ui/react"
import { ProjectTagList } from  "../../ProjectTaglist";
import { ProjectSource } from  "../../ProjectSource";
import { ButtonLink } from "../../Links/ButtonLink";
import { IProps } from "./IProps"
import { AiOutlineArrowLeft } from "react-icons/ai"

export const ProjectSidebar: FC<IProps> = (props): JSX.Element => {
    return (
        <Drawer
            isOpen={props.isOpen}
            placement='right'
            onClose={props.onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader>
                    <DrawerCloseButton />
                </DrawerHeader>
                <DrawerBody>
                    <VStack spacing={10} >
                        <ProjectTagList tags={props.tags} />
                        <ProjectSource repo={props.repo} />
                    </VStack>
                </DrawerBody>
                <DrawerFooter>
                    <ButtonLink icon={AiOutlineArrowLeft} href="/" text="return" />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}