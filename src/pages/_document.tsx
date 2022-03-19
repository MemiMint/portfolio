import React, { ReactElement } from 'react';
import NextDocument, { Html, Main, Head, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { GoogleFonts } from 'next-google-fonts';


class AppDocument extends NextDocument {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps: DocumentInitialProps = await NextDocument.getInitialProps(ctx);

        return initialProps;
    }

    render(): ReactElement {
        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap" />
                <Head>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument;