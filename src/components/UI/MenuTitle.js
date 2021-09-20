import React from "react"

import ThemeContext from "../../system/ThemeContext"

const MenuTitle = ({ title, className }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <h2 className={`font-bebas text-8xl text-center ${className}`}>
          {title}
        </h2>
      )}
    </ThemeContext.Consumer>
  )
}

export default MenuTitle
