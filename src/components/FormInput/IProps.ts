import { IconType } from "react-icons";

export interface IProps {
    label: string;
    icon: IconType;
    name: string;
    value: string;
    error: boolean;
    onFocus: () => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}