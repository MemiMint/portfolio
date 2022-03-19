import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../../styles/theme"

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ChakraProvider theme={customTheme} >
            <Component { ...pageProps } />
        </ChakraProvider>
    )
}

export default App;