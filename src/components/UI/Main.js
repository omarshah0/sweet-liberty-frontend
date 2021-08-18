import React from "react"

const Main = ({ children, backgroundColor }) => {
  return (
    <main
      className={`pt-32 md:pt-36 relative`}
      style={{ backgroundColor: backgroundColor || "#c0f3d4" }}
    >
      {children}
    </main>
  )
}

export default Main
