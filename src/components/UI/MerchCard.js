import React from "react"

import { FormButton } from "../UI"

const MerchCard = ({ img, title, description, price, link }) => {
  return (
    <div className="font-bebas text-brandDark text-center">
      <img src={img} alt={title} className="mb-14 h-72" />
      <h3 className="text-7xl w-48 mx-auto mb-4">{title}</h3>
      <h3 className="text-5xl mb-4">{description}</h3>
      <span className="block text-4xl mb-4">{price}</span>
      <FormButton
        className="border-brandLight"
        font="font-bebas text-brandLight text-2xl"
      >
        View Product
      </FormButton>
    </div>
  )
}

export default MerchCard
