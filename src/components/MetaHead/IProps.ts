interface IMetadata {
    name: string;
    content: string;
}

export interface IProps {
    title: string;
    meta: IMetadata[];
}