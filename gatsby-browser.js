import Provider from "./src/system/Provider"

import "@fontsource/bebas-neue"
import "@fontsource/frank-ruhl-libre"
import "@fontsource/frank-ruhl-libre/700.css"
import "@fontsource/red-hat-display/400.css"
import "@fontsource/red-hat-display/700.css"
import "@fontsource/source-sans-pro"
import "@fontsource/source-sans-pro/700.css"
import "@fontsource/cantata-one"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "react-datepicker/dist/react-datepicker.css"
import "simplebar/dist/simplebar.min.css"
import "./src/styles/global.css"
import "./src/styles/hamburger.css"
import "./src/styles/menuNav.css"
import "./src/styles/hero.css"
import "./src/styles/marquee.css"
import "./src/styles/scrollingMenu.css"
import "./src/styles/productCart.css"

export const onInitialClientRender = () => {
  document.getElementById("___loader").style.display = "none"
}

export const onRouteUpdate = () => {
  document.body.style.overflow = "auto"
}

export const wrapRootElement = Provider
