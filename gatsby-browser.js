import React from "react"

import { ThemeProvider } from "./src/system/ThemeContext"

import "@fontsource/bebas-neue"
import "@fontsource/frank-ruhl-libre"
import "@fontsource/frank-ruhl-libre/700.css"
import "@fontsource/red-hat-display/400.css"
import "@fontsource/red-hat-display/700.css"
import "@fontsource/source-sans-pro/700.css"
import "@fontsource/cantata-one"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
