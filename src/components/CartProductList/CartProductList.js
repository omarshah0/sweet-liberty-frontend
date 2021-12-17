import React from "react"
import { useDispatch } from "react-redux"
import { GatsbyImage } from "gatsby-plugin-image"

import { MinusSvg, PlusSvg, CrossSVG } from "../UI/Arrows"

const CartProductList = ({ className, product }) => {
  const dispatch = useDispatch()

  const updateQuantity = quantity => {
    if (quantity > product.maxQuantity || quantity < 1) return
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: product.id, quantity: quantity },
    })
  }

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id })
  }

  return (
    <div className={`${className}`}>
      <div className="flex md:items-center">
        {/* Left Section Having Image */}
        <div className="w-[153px] h-[153px] md:w-[100px] md:h-[100px] bg-gray-300 mr-[10px] md:mr-[65px]">
          <GatsbyImage
            image={
              product.featuredImage.localFile.childImageSharp.gatsbyImageData
            }
            alt={product.featuredImage.altText}
            className="w-full h-full"
          />
        </div>
        {/* Right Section with Product Details */}
        <div className="text-brandDark font-bebas flex flex-grow flex-col md:flex-row justify-between md:items-center">
          <div className="md:flex-300">
            <h2 className="text-[21px] leading-none">{product.title}</h2>
            <span className="text-sm leading-none block">
              {product.selectedVariant.color} / {product.selectedVariant.size}
            </span>
          </div>
          <span className="font-bebas text-[18px] text-brandDark block flex-100">
            ${product.price}
          </span>
          <div className="flex-100">
            <div className="inline-flex border-[1px] border-[#E5E7Eb] p-1 rounded">
              <button
                className="w-[25px] grid place-items-center mr-4 bg-gray-200 rounded-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => updateQuantity(product.quantity - 1)}
                disabled={product.quantity === 1}
              >
                <MinusSvg />
              </button>
              <span className="text-lg font-sourceSansProBold font-semibold">
                {product.quantity}
              </span>
              <button
                className="w-[25px] grid place-items-center ml-4 bg-gray-200 rounded-[3px] disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => updateQuantity(product.quantity + 1)}
                disabled={product.quantity === product.maxQuantity}
              >
                <PlusSvg />
              </button>
            </div>
          </div>
          <div className="flex-100">
            <button
              className="group w-[25px] h-[25px] bg-[#F8D3D5] hover:bg-[#DB232E] rounded-full transition-all duration-150"
              onClick={() => removeFromCart()}
            >
              <CrossSVG className="fill-current text-[#DB232E] group-hover:text-[#F3F3F3] transform translate-x-[7.5px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProductList
