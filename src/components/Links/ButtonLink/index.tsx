import { FC } from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import { ILink } from "../IProps"


export const ButtonLink: FC<ILink> = (props): JSX.Element => {
    const { push } = useRouter();

    return (
        <Button leftIcon={<props.icon />} backgroundColor="black" color="white" onClick={() => {
            push(props.href);
        }} >
            { props.text }
        </Button>
    )
}