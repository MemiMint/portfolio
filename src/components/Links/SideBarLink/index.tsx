import React, { FC } from "react";
import { useRouter } from "next/router"
import { Button, useDisclosure } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai"
import { IProps } from "./IProps"

export const SideBarlink: FC<IProps> = (props): JSX.Element => {
    const { push } = useRouter();

    return (
        <Button border={"2px"} borderColor="black" leftIcon={<props.icon />} textAlign="start" variant="outline" onClick={() => {
            push(props.href).then(() => {
                props.onClose();
            })
        }} >
            { props.text }
        </Button>
    )
}