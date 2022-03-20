import React, { FC } from "react";
import ReactCountryFlag from "react-country-flag";

export const FlagVE: FC = (): JSX.Element => {
    return (
        <ReactCountryFlag countryCode="VE" style={{fontSize: 40}} svg />
    )
}