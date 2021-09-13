import React, { useState, createContext } from "react"

const defaultState = {
  body: "bg-brandLight",
  hamburger: "bg-brandDark",
  navButtonBg: "bg-shopBg",
  navButtonText: "text-white",
  navButtonHover: "hover:bg-brandDark",
  navButtonHoverText: "hover:text-white",
  mainTitle: "text-brandDark",
  subMenuTitle: "text-brandRed",
  itemText: "text-brandDark",
  darkSectionBg: "bg-brandDark",
  darkSectionSubMenuTitle: "text-white",
  darkSectionItemText: "text-white",
  dark: false,
}

const happyHourState = {
  body: "bg-happyHour",
  hamburger: "bg-brandLight",
  navButtonBg: "bg-shopBg",
  navButtonText: "text-white",
  navButtonHover: "hover:bg-brandPink",
  navButtonHoverText: "hover:text-white",
  mainTitle: "text-brandPink",
  subMenuTitle: "text-brandPink",
  itemText: "text-brandLight",
  darkSectionBg: "bg-brandDark",
  darkSectionSubMenuTitle: "text-white",
  darkSectionItemText: "text-white",
  dark: true,
}

const specials = {
  body: "bg-brandDark",
  hamburger: "bg-brandLight",
  navButtonBg: "bg-shopBg",
  navButtonText: "text-white",
  navButtonHover: "hover:bg-brandPink",
  navButtonHoverText: "hover:text-white",
  mainTitle: "text-brandLight",
  subMenuTitle: "text-brandLight",
  itemText: "text-white ",
  darkSectionBg: "bg-brandDark",
  darkSectionSubMenuTitle: "text-white",
  darkSectionItemText: "text-white",
  dark: true,
}

const brunch = {
  body: "bg-brunch",
  hamburger: "bg-brandDark",
  navButtonBg: "bg-brandGrey",
  navButtonText: "text-black",
  navButtonHover: "hover:bg-brandPink",
  navButtonHoverText: "hover:text-white",
  mainTitle: "text-brandPink",
  subMenuTitle: "text-brandPink",
  itemText: "text-black ",
  darkSectionBg: "bg-brandDark",
  darkSectionSubMenuTitle: "text-white",
  darkSectionItemText: "text-white",
  dark: false,
}

const ACTIONS = {
  FOOD: "#c0f3d4",
  HAPPYHOURS: "#111827",
  COCKTAILS: "#c0f3d4",
  SPECIALS: "#257972",
  BRUNCH: "#f3f4f6",
  BEER: "#c0f3d4",
}

const ThemeContext = createContext(defaultState)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultState)
  const themeHandler = theme => {
    console.log("Theme Handler Executed ", theme)
    switch (theme) {
      case ACTIONS.FOOD || ACTIONS.COCKTAILS || ACTIONS.BEER:
        setTheme(defaultState)
        break
      case ACTIONS.HAPPYHOURS:
        setTheme(happyHourState)
        break
      case ACTIONS.SPECIALS:
        setTheme(specials)
        break
      case ACTIONS.BRUNCH:
        setTheme(brunch)
        break
      default:
      // code block
    }
  }

  const value = { theme, themeHandler }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export default ThemeContext

export { ThemeProvider }
