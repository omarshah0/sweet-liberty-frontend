import React from "react"

const RightArrow = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      className={`inline-block ${className}`}
    >
      <path
        d="M1.33301 14.9331L8.79967 7.99974L1.33301 1.06641"
        stroke="#257972"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RightArrow
