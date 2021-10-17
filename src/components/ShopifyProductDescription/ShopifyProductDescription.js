import React, { Fragment } from "react"

import { shopifyProductVariantNormalize } from "../../utilities"

const ShopifyProductDescription = ({
  title,
  description,
  hasOnlyDefaultVariant,
  totalInverntory,
  price,
  variants,
}) => {
  const normalizedVariants =
    !hasOnlyDefaultVariant && shopifyProductVariantNormalize(variants)
  return (
    <div className="font-bebas mt-[-7px]">
      <h1 className="text-brandDark text-[68px] mb-[15px] leading-none">
        {title}
      </h1>
      <span className="block text-brandPink text-[45px] mb-[18px]">
        ${parseInt(price.minVariantPrice.amount)}
      </span>
      <p className="text-brandDark text-2xl max-w-[400px] mb-4">
        {description}
      </p>
      {!hasOnlyDefaultVariant && (
        <Fragment>
          <div className="flex items-center mb-3">
            <label
              for="color"
              className="text-2xl text-brandDark flex items-center mr-4 min-w-[85px]"
            >
              Color{" "}
              <span className="text-brandRed ml-1 transform translate-y-1">
                *
              </span>
            </label>
            <select
              name="color"
              id="color"
              className="block w-full p-3 bg-brandLight rounded text-[#2a2d36] opacity-50 outline-none"
            >
              {normalizedVariants.colorFilter.map(v => (
                <option value={v.color} key={v.id}>
                  {v.color}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label
              for="color"
              className="text-2xl text-brandDark flex items-center mr-4 min-w-[85px]"
            >
              Size{" "}
              <span className="text-brandRed ml-1 transform translate-y-1">
                *
              </span>
            </label>
            <select
              name="size"
              id="size"
              className="block w-full p-3 bg-brandLight rounded text-[#2a2d36] opacity-50 outline-none"
            >
              {normalizedVariants.sizeFilter.map(v => (
                <option value={v.size} key={v.id}>
                  {v.size}
                </option>
              ))}
            </select>
          </div>
        </Fragment>
      )}
      <div>
        <p>Quantity Box : Total Inventory : {totalInverntory}</p>
      </div>
    </div>
  )
}

export default ShopifyProductDescription
