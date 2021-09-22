import React from "react"

const Hamburger = ({ className, color, onClick }) => {
  return (
    <button
      className={`hamburger ${className} bg-transparent bg-none outline-none border-none`}
      onClick={onClick}
      type="button"
      aria-label="Toggle Main Navigation"
      aria-controls="nav-main"
      style={{
        position: "absolute",
        top: "50%",
        right: "0px",
        transform: "translateY(-50%)",
        zIndex: "20",
      }}
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
