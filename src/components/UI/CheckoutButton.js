import React from "react"

const CheckoutButton = ({ title, onClick, className }) => {
  return (
    <button
      className={`bg-brandRed text-white font-sourceSansProBold text-base leading-none py-4 px-6 rounded ${className}`}
      onClick={() => onClick()}
    >
      {title}
    </button>
  )
}

export default CheckoutButton
