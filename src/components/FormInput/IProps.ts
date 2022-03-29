import { IconType } from "react-icons";

export interface IProps {
    label: string;
    icon: IconType;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}