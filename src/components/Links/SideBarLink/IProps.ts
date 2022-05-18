import { ReactElement } from "react";
import { IconType } from "react-icons";
import { ILink } from "../IProps";

export interface IProps extends ILink {
    icon: IconType
    onClose?: () => void;
}