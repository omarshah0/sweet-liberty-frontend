import React, { Fragment, useEffect, useState } from "react"
import { Link } from "gatsby"
import Loader from "react-loader-spinner"
import { useSelector, useDispatch } from "react-redux"

import { getProductVariantQuantity } from "../../functions"
import { PlusSvg, MinusSvg } from "../UI/Arrows"

const ShopifyProductDescription = ({
  featuredImage,
  title,
  description,
  hasOnlyDefaultVariant,
  price,
  normalizedVariants,
  variants,
}) => {
  const productFromStore = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(
    hasOnlyDefaultVariant ? "" : normalizedVariants.colorFilter[0].color
  )
  const [selectedSize, setSelectedSize] = useState(
    hasOnlyDefaultVariant ? "" : normalizedVariants.sizeFilter[0].size
  )
  const [outOfStock, setOutOfStock] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedVariantQuantity, setSelectedVariantQuantity] = useState(
    hasOnlyDefaultVariant
      ? ""
      : normalizedVariants.colorFilter[0].inventoryQuantity
  )
  const [selectedVariantId, setSelectedVariantId] = useState(
    hasOnlyDefaultVariant
      ? variants[0].legacyResourceId
      : normalizedVariants.colorFilter[0].legacyResourceId
  )

  const inCartTest = productFromStore.products.some(
    p => p.id === parseInt(selectedVariantId)
  )

  const increaseQuantityHandler = () => {
    if (quantity < selectedVariantQuantity) {
      return setQuantity(quantity + 1)
    }
  }

  const decreaseQuantityHandler = () => {
    if (quantity === 1) return
    setQuantity(quantity - 1)
  }

  const selectColorHandler = e => {
    setSelectedColor(e.target.value)
  }

  const selectSizeHandler = e => {
    setSelectedSize(e.target.value)
  }

  const getSelectedVariantIDHandler = defaultID => {
    setQuantity(1)
    if (hasOnlyDefaultVariant) {
      return getSelectedVariantStockQuantityHandler(defaultID)
    }
    const matchTitle = `${selectedSize} / ${selectedColor}`
    var results = variants.filter(entry => {
      return entry.title === matchTitle
    })
    getSelectedVariantStockQuantityHandler(results[0].legacyResourceId)
  }

  const getSelectedVariantStockQuantityHandler = async id => {
    setLoading(true)
    const { status, data } = await getProductVariantQuantity(id)
    if (status !== 200) return setLoading(false)
    if (data.data.inventory_quantity === 0) {
      setOutOfStock(true)
    } else {
      setOutOfStock(false)
    }
    setSelectedVariantId(data.data.id)
    setSelectedVariantQuantity(data.data.inventory_quantity)
    setLoading(false)
  }

  useEffect(() => {
    if (!hasOnlyDefaultVariant) {
      getSelectedVariantIDHandler()
    }
  }, [selectedSize, selectedColor])

  useEffect(() => {
    if (hasOnlyDefaultVariant) {
      getSelectedVariantIDHandler(variants[0].legacyResourceId)
    }
  }, [])

  const dispatchProductToStore = () => {
    const selectedVariant = { color: selectedColor, size: selectedSize }
    const cart = {
      id: selectedVariantId,
      featuredImage,
      title,
      selectedVariant,
      quantity,
    }
    if (inCartTest) {
      return dispatch({ type: "REMOVE_FROM_CART", payload: selectedVariantId })
    }
    return dispatch({ type: "ADD_TO_CART", payload: cart })
  }

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
        <div className="flex">
          <span className="block text-brandPink text-[23px] font-bebas mb-4">
            Quantity : {selectedVariantQuantity}
          </span>
          {loading && (
            <span className="ml-5 mt-1">
              <Loader type="Circles" color="#EF5DA8" height={25} width={25} />
            </span>
          )}
        </div>
        <div className="flex">
          <div className="inline-flex font-sourceSansProBold bg-gray-200 rounded mr-10">
            <button
              className="w-[70px] px-[15px] py-5"
              onClick={decreaseQuantityHandler}
            >
              <MinusSvg firstNumber={quantity === 1} />
            </button>
            <span
              className={`text-lg w-[70px] grid place-items-center ${
                outOfStock ? "text-[#808080]" : "text-black"
              }`}
            >
              {quantity}
            </span>
            <button
              className="w-[70px] px-[15px] py-5"
              onClick={increaseQuantityHandler}
              disabled={outOfStock}
            >
              <PlusSvg
                disabled={quantity === selectedVariantQuantity || outOfStock}
              />
            </button>
          </div>
          <button
            className="block bg-brandPink bg-opacity-90 hover:bg-opacity-100 font-sourceSansProBold text-base py-3 min-w-[250px] text-center text-white rounded transition-all"
            onClick={dispatchProductToStore}
          >
            {inCartTest ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
        {outOfStock && (
          <div>
            <span>Out of Stock</span>
          </div>
        )}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  )
}

export default ShopifyProductDescription
