export interface IProps {
    name: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}