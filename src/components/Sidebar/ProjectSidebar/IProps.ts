import { IProps as SideBarProps } from "../IProps"

export interface IProps extends SideBarProps {
    repo: string;
    tags: string[];
}