import React from "react"

const Main = ({ children, backgroundColor }) => {
  return (
    <main
      className={`pt-32 md:pt-36 relative`}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </main>
  )
}

export default Main
