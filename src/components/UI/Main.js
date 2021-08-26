import React from "react"

const Main = ({ children, backgroundColor, className }) => {
  return (
    <main
      className={`pt-32 md:pt-44 relative ${className}`}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </main>
  )
}

Main.defaultProps = {
  className: "bg-brandDark",
}

export default Main
