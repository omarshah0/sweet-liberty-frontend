import React from "react"

const Hamburger = ({ className, color, onClick }) => {
  return (
    <button className={`hamburger ${className}`} onClick={onClick}>
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
