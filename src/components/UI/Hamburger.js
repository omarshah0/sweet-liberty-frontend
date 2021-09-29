import React from "react"

const Hamburger = ({ className, color, onClick }) => {
  return (
    <button
      className={`hamburger ${className} bg-transparent bg-none outline-none border-none relative z-20`}
      onClick={onClick}
      type="button"
      aria-label="Toggle Main Navigation"
      aria-controls="nav-main"
    >
      <span className={color}></span>
      <span className={color}></span>
      <span className={color}></span>
      <span className={color}></span>
      <span className={color}></span>
      <span className={color}></span>
    </button>
  )
}

export default Hamburger
