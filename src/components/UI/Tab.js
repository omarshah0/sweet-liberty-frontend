import React from "react"

import ThemeContext from "../../system/ThemeContext"

const Tab = ({ title, icon }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button
          className={`group ${theme.navButtonBg} min-w-max hover:${theme.navButtonHover} hover:${theme.navButtonHoverText} font-sourceSansProBold px-8 py-4 rounded transition`}
        >
          {icon && <img src={icon} alt={icon.name} className="inline mr-3" />}
          {title}
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

export default Tab
