import Head from "next/head";
import React, { FC } from "react";
import { IProps } from "./IProps"
import { GoogleFonts } from 'next-google-fonts';

export const MetaHead: FC<IProps> = (props): JSX.Element => {
    return (
        <React.Fragment>
            <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap" />
            <Head>
                <title>{props.title}</title>

                <meta charSet="utf-8" />
                <meta name="author" content="Yeferson Hidalgo" />
                {
                    props.meta.map((meta): JSX.Element => {
                        return (
                            <meta name={meta.name} content={meta.content} />
                        )
                    })
                }
            </Head>
        </React.Fragment>
    )
}