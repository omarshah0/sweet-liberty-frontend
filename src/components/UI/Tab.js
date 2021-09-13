import React from "react"

import ThemeContext from "../../system/ThemeContext"

const Tab = ({ title, icon }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <button
            className={`${theme.navButtonBg} min-w-max ${theme.navButtonHover} ${theme.navButtonHoverText} font-sourceSansProBold px-8 py-4 rounded transition`}
          >
            {icon && <img src={icon} alt={icon.name} className="inline mr-3" />}
            {title}
          </button>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Tab
