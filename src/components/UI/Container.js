import React from "react"

const Container = ({ children, className }) => {
  return (
    <div
      className={`px-6 md:px-10 lg:px-12 max-w-screen-2xl mx-auto ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
