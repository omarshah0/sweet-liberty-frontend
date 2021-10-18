import React, { Fragment, useEffect, useState } from "react"

const ShopifyProductDescription = ({
  title,
  description,
  hasOnlyDefaultVariant,
  price,
  normalizedVariants,
  variants,
  defaultVariantTotalInventory,
}) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(
    hasOnlyDefaultVariant ? "" : normalizedVariants.colorFilter[0].color
  )
  const [selectedSize, setSelectedSize] = useState(
    hasOnlyDefaultVariant ? "" : normalizedVariants.sizeFilter[0].size
  )
  const [selectedVariantQuantity, setSelectedVariantQuantity] = useState(1)
  const [outOfStock, setOutOfStock] = useState(false)

  const increaseQuantityHandler = () => {
    if (hasOnlyDefaultVariant && quantity <= defaultVariantTotalInventory) {
      checkStockQuantityDefaultVariant()
      setQuantity(quantity + 1)
    } else if (quantity < selectedVariantQuantity) {
      setQuantity(quantity + 1)
    }
  }

  const decreaseQuantityHandler = () => {
    if (quantity <= 1) return
    if (quantity < selectedVariantQuantity) {
      setOutOfStock(false)
    }
    setQuantity(quantity - 1)
  }

  const selectColorHandler = e => {
    setSelectedColor(e.target.value)
  }

  const selectSizeHandler = e => {
    setSelectedSize(e.target.value)
  }

  const checkStockQuantity = () => {
    setQuantity(1)
    const matchTitle = `${selectedSize} / ${selectedColor}`
    var results = variants.filter(function (entry) {
      return entry.title === matchTitle
    })
    if (results.length !== 0 && results[0].inventoryQuantity !== 0) {
      setOutOfStock(false)
      return setSelectedVariantQuantity(results[0].inventoryQuantity)
    }
    return setOutOfStock(true)
  }

  const checkStockQuantityDefaultVariant = () => {
    setQuantity(1)
    if (hasOnlyDefaultVariant && quantity <= defaultVariantTotalInventory) {
      return setOutOfStock(false)
    } else {
      return setOutOfStock(true)
    }
  }

  useEffect(() => {
    if (hasOnlyDefaultVariant) {
      return checkStockQuantityDefaultVariant()
    }
    checkStockQuantity()
  }, [selectedSize, selectedColor])

  useEffect(() => {
    if (hasOnlyDefaultVariant && quantity === defaultVariantTotalInventory) {
      setOutOfStock(true)
    } else if (quantity === selectedVariantQuantity) {
      setOutOfStock(true)
    } else {
      setOutOfStock(false)
    }
  }, [quantity])

  return (
    <div className="font-bebas mt-[-7px]">
      {console.log(
        `Selected Product is Size: ${selectedSize} and Color: ${selectedColor} and Quantity: ${quantity}`
      )}
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
              className="block w-full p-3 bg-gray-100 rounded text-[#2a2d36] text-opacity-50 outline-none"
              value={selectedColor}
              onChange={selectColorHandler}
            >
              {normalizedVariants.colorFilter.map(v => (
                <option value={v.color} key={v.id}>
                  {v.color}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-5">
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
              className="block w-full p-3 bg-gray-100 rounded text-[#2a2d36] text-opacity-50 outline-none"
              value={selectedSize}
              onChange={selectSizeHandler}
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
        <span className="block text-brandPink text-[23px] font-bebas mb-4">
          Quantity
        </span>
        <div className="flex">
          <div className="inline-flex font-sourceSansProBold bg-gray-200 rounded mr-10">
            <button
              className="w-[70px] px-[15px] py-5"
              onClick={decreaseQuantityHandler}
            >
              <MinusSvg firstNumber={quantity === 1} />
            </button>
            <span className="text-lg w-[70px] grid place-items-center">
              {quantity}
            </span>
            <button
              className="w-[70px] px-[15px] py-5"
              onClick={increaseQuantityHandler}
              disabled={outOfStock}
            >
              <PlusSvg outOfStock={outOfStock} />
            </button>
          </div>
          <button className="block bg-brandPink bg-opacity-90 hover:bg-opacity-100 font-sourceSansProBold text-base py-3 min-w-[250px] text-center text-white rounded transition-all">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShopifyProductDescription

const MinusSvg = ({ firstNumber }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="3"
      viewBox="0 0 15 3"
      fill="none"
    >
      <path
        d="M1.5 0.435L6.4425 0.4425L8.5575 0.4425L13.5 0.435C13.77 0.435 14.04 0.539999 14.25 0.75C14.6625 1.1625 14.6625 1.8375 14.25 2.25C14.04 2.46 13.77 2.565 13.4925 2.5575L8.5575 2.5575L6.4425 2.5575L1.5 2.565C1.23 2.565 0.96 2.46 0.75 2.25C0.3375 1.8375 0.3375 1.1625 0.75 0.75C0.96 0.54 1.23 0.435 1.5 0.435Z"
        fill={firstNumber ? "gray" : "black"}
      />
    </svg>
  )
}

const PlusSvg = ({ outOfStock }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className="float-right"
    >
      <path
        d="M8.5575 6.4425L8.5575 1.5075C8.565 1.23 8.46 0.96 8.25 0.749999C7.8375 0.337499 7.1625 0.3375 6.75 0.75C6.54 0.959999 6.435 1.23 6.435 1.5L6.4425 6.4425L1.5 6.435C1.23 6.435 0.96 6.54 0.75 6.75C0.3375 7.1625 0.3375 7.8375 0.75 8.25C0.96 8.46 1.23 8.565 1.5 8.565L6.4425 8.5575L6.4425 13.4925C6.435 13.77 6.54 14.04 6.75 14.25C7.1625 14.6625 7.8375 14.6625 8.25 14.25C8.46 14.04 8.565 13.77 8.565 13.5L8.5575 8.5575L13.4925 8.5575C13.77 8.565 14.04 8.46 14.25 8.25C14.6625 7.8375 14.6625 7.1625 14.25 6.75C14.04 6.54 13.77 6.435 13.5 6.435L8.5575 6.4425Z"
        fill={outOfStock ? "gray" : "black"}
      />
    </svg>
  )
}
