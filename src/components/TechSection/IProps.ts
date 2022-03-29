import { IProps as ITechBoxProps } from "../TechBox/IProps";

export interface IProps {
    id?: string;
    header: {
        color: string;
        text: string;
    }
    backgroundColor: string;
    data: ITechBoxProps[];
}