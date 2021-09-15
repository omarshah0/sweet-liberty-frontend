import React from "react"

import ThemeContext from "../../system/ThemeContext"

const Tab = ({ title, icon, isActive }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <button
            className={`${
              isActive ? "bg-brandDark text-white" : "bg-shopBg text-brandDark"
            } group min-w-max hover:bg-brandDark hover:text-white font-sourceSansProBold px-8 py-4 rounded transition}`}
          >
            {icon && (
              <img
                src={icon}
                alt={icon.name}
                className={`inline mr-3 ${
                  isActive ? "" : "svg-brandDark"
                } group-hover:svg-none`}
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
