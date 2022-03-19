import Head from "next/head";
import React, { FC } from "react";
import { IProps } from "./IProps"

export const MetaHead: FC<IProps> = (props): JSX.Element => {
    return (
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
    )
}