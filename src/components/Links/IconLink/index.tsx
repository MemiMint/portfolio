import { FC } from "react";
import { Link, Icon, HStack, Text,Tooltip } from "@chakra-ui/react";
import { IProps } from "./IProps"

export const IconLink: FC<IProps> = (props): JSX.Element => {
    return (
        <Tooltip label={props.tooltip} placement="top" >
            <Link target="_blank" alignItems="center" href={props.href} isExternal >
                <HStack spacing={4}>
                    <Icon color={props.color} as={props.icon} w="6" h="6" />
                    {
                        props.text && (
                            <Text>
                                {props.text}
                            </Text>
                        )
                    }
                </HStack>
            </Link>
        </Tooltip>
    )
}