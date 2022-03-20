import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"


const fonts = {
    ...chakraTheme.fonts,
    body: `Montserrat`,
    heading: `Montserrat`
}

const fontWeights = {
    normal: 300,
    medium: 600,
    bold: 700    
}

const fontSizes = {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
}

const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "62em",
})

const components = {
    Link: {
        baseStyle: {
            textDecor: "none"
        },
        sizes: {},
        variants: {}
    }
}

const styles = {
    global: {
        body: {
            padding: 0,
            margin: 0,
        },
        a: {
            _hover: {
                textDecoration: "none"
            }
        }
    }
}

const overrides = {
    ...chakraTheme,
    fonts,
    fontWeights,
    fontSizes,
    breakpoints,
    components,
    styles
}

const customTheme = extendTheme(overrides)

export default customTheme;