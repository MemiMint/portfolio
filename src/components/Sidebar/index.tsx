import React, { FC } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack
} from "@chakra-ui/react"
import { SideBarHeader } from  "../SideBarHeader"
import { SideBarlink } from  "../SideBarLink";
import { IProps } from "./IProps"
import { AiOutlineHome } from "react-icons/ai"


export const SideBar: FC<IProps> = (props): JSX.Element => {
    return (
        <Drawer
            isOpen={props.isOpen}
            placement='right'
            onClose={props.onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <SideBarHeader />
                <DrawerBody>
                    <Stack maxW="7xl" spacing={6}>
                        <SideBarlink />
                        <SideBarlink />
                        <SideBarlink />
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}