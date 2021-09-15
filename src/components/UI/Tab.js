import React from "react"

import ThemeContext from "../../system/ThemeContext"

const Tab = ({ title, icon, isActive }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <button
            className={`${
              isActive
                ? `${theme.navButtonActive} ${theme.navButtonActiveText}`
                : `${theme.navButtonBg} ${theme.navButtonText}`
            } group min-w-max ${
              theme.navButtonHover
            } hover:text-white font-sourceSansProBold px-8 py-4 rounded transition}`}
          >
            {icon && (
              <img
                src={icon}
                alt={icon.name}
                className={`inline mr-3 ${
                  isActive
                    ? theme.navButtomnActiveSvg
                    : theme.navButtonInactiveSvg
                } ${theme.navButtonInactiveSvgHover}`}
              />
            )}
            {title}
          </button>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Tab
