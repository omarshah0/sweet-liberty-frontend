import React from "react"

import { BreadCumbArrow } from "../UI/Arrows"
const CheckoutBreadcrumbs = ({ step, className }) => {
  console.log("Step is ", step)
  return (
    <div
      className={`font-sourceSansProBold font-bold text-xl leading-none flex items-center ${className}`}
    >
      <span
        className={`mr-5 ${step === 1 ? "text-gray-900" : "text-gray-900/50"}`}
      >
        Information
      </span>
      <BreadCumbArrow className="text-gray-900/50 mr-5" />
      <span
        className={`mr-5 ${step === 2 ? "text-gray-900" : "text-gray-900/50"}`}
      >
        Shipping
      </span>
      <BreadCumbArrow className="text-gray-900/50 mr-5" />
      <span className={step === 3 ? "text-gray-900" : "text-gray-900/50"}>
        Payment{" "}
      </span>
    </div>
  )
}

export default CheckoutBreadcrumbs
