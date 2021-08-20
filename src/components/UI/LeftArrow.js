import React from "react"

const LeftArrow = ({ className }) => {
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
        d="M8.66699 14.9331L1.20033 7.99974L8.66699 1.06641"
        stroke="#257972"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LeftArrow
