import React, { useState, createContext } from "react"

const defaultState = {
  body: "bg-brandLight",
  hamburger: "bg-brandDark",
  navButtonActive: "bg-brandDark",
  navButtonActiveText: "text-white",
  navButtomnActiveSvg: "svg-none",
  navButtonInactiveSvg: "svg-brandDark",
  navButtonInactiveSvgHover: "group-hover:svg-none",
  navButtonBg: "bg-shopBg",
  navButtonText: "text-brandDark",
  navButtonHover: "hover:bg-brandDark",
  navButtonHoverText: "hover:text-white",
  mainTitle: "text-brandDark",
  subMenuTitle: "text-brandRed",
  itemText: "text-brandDark",
  darkSectionBg: "bg-brandDark",
  darkSectionSubMenuTitle: "text-white",
  darkSectionItemText: "text-white",
  dark: false,
  vegBg: "bg-brandDark",
  vegText: "text-white",
  infoText: "text-brandDark",
}

const beerAndWineState = {
  body: "bg-brandLight",
  hamburger: "bg-brandDark",
  navButtonActive: "bg-brandRed",
  navButtonActiveText: "text-white",
  navButtomnActiveSvg: "svg-none",
  navButtonInactiveSvg: "svg-brandDark",
  navButtonInactiveSvgHover: "group-hover:svg-none",
  navButtonBg: "bg-shopBg",
  navButtonText: "text-brandDark",
  navButtonHover: "hover:bg-brandRed",
  navButtonHoverText: "hover:text-white",
  mainTitle: "text-brandDark",
  subMenuTitle: "text-brandRed",
  itemText: "text-brandDark",
  darkSectionBg: "bg-brandDark",
  darkSectionSubMenuTitle: "text-white",
  darkSectionItemText: "text-white",
  dark: false,
  vegBg: "bg-brandRed",
  vegText: "text-white",
  infoText: "text-brandDark",
}

const happyHourState = {
  body: "bg-happyHour",
  hamburger: "bg-brandLight",
  navButtonActive: "bg-brandPink",
  navButtonActiveText: "text-white",
  navButtomnActiveSvg: "svg-none",
  navButtonInactiveSvg: "svg-brandDark",
  navButtonInactiveSvgHover: "group-hover:svg-none",
  navButtonBg: "bg-shopBg",
  navButtonText: "text-brandDark",
  navButtonHover: "hover:bg-brandPink",
  navButtonHoverText: "hover:text-white",
  mainTitle: "text-brandPink",
  subMenuTitle: "text-brandPink",
  itemText: "text-brandLight",
  darkSectionBg: "bg-brandDark",
  darkSectionSubMenuTitle: "text-white",
  darkSectionItemText: "text-white",
  dark: true,
  vegBg: "bg-brandPink",
  vegText: "text-white",
  infoText: "text-white",
}

const specials = {
  body: "bg-brandDark",
  hamburger: "bg-brandLight",
  navButtonActive: "bg-brandPink",
  navButtonActiveText: "text-white",
  navButtomnActiveSvg: "svg-none",
  navButtonInactiveSvg: "svg-brandDark",
  navButtonInactiveSvgHover: "group-hover:svg-none",
  navButtonBg: "bg-shopBg",
  navButtonText: "text-brandDark",
  navButtonHover: "hover:bg-brandPink",
  navButtonHoverText: "hover:text-white",
  mainTitle: "text-brandLight",
  subMenuTitle: "text-brandLight",
  itemText: "text-white ",
  darkSectionBg: "bg-brandDark",
  darkSectionSubMenuTitle: "text-white",
  darkSectionItemText: "text-white",
  dark: true,
  vegBg: "bg-brandPink",
  vegText: "text-white",
  infoText: "text-brandLight",
}

const brunch = {
  body: "bg-brunch",
  hamburger: "bg-brandDark",
  navButtonActive: "bg-brandPink",
  navButtonActiveText: "text-white",
  navButtomnActiveSvg: "svg-none",
  navButtonInactiveSvg: "svg-black",
  navButtonInactiveSvgHover: "group-hover:svg-none",
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
  vegBg: "bg-brandPink",
  vegText: "text-white",
  infoText: "text-black",
}

const ACTIONS = {
  FOOD: "Food",
  BEERANDWINE: "Beer & Wine",
  HAPPYHOUR: "Happy Hour",
  COCKTAIL: "Cocktail",
  SPECIALS: "Specials",
  BRUNCH: "Brunch",
}

const ThemeContext = createContext(defaultState)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultState)
  const themeHandler = theme => {
    switch (theme) {
      case ACTIONS.COCKTAIL:
        setTheme(defaultState)
        break
      case ACTIONS.FOOD:
        setTheme(defaultState)
        break
      case ACTIONS.BEERANDWINE:
        setTheme(beerAndWineState)
        break
      case ACTIONS.HAPPYHOUR:
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
