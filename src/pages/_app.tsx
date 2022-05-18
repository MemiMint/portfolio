import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react"
import { AppProvider } from "../context"
import customTheme from "../../styles/theme"

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <AppProvider>
            <ChakraProvider theme={customTheme} >
                <Component {...pageProps} />
            </ChakraProvider>
        </AppProvider>
    )
}

export default App;