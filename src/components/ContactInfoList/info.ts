import { IProps as IContactBoxProps } from "../ContactBox/IProps";
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from 'react-icons/md';

export const contact: Array<IContactBoxProps> = [
    {
        icon: MdPhone,
        text: "+58 4147911030"
    },
    {
        icon: MdEmail,
        text: "yefersonmoiseshidalgo@gmail.com"
    },
    {
        icon: MdLocationOn,
        text: "Nueva Esparta, Venezuela"
    }
];