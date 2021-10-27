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
    <div className={`grid product-cart items-center ${className}`}>
      <div className="flex items-center product-cart-product">
        <div className="w-[102px] h-[102px] bg-gray-300 grid place-items-center mr-[70px]">
          <GatsbyImage
            image={
              product.featuredImage.localFile.childImageSharp.gatsbyImageData
            }
            alt={product.featuredImage.altText}
          />
        </div>
        <div className="text-brandDark font-bebas">
          <h2 className="text-[32px] leading-none">{product.title}</h2>
          <span className="text-lg leading-none">
            {product.selectedVariant.color} / {product.selectedVariant.size}
          </span>
        </div>
      </div>
      <div className="product-cart-price font-bebas text-[25px] text-brandDark text-center">
        $49.00
      </div>
      <div className="product-cart-quantity text-center">
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
      <button
        className="product-cart-close-button group w-[25px] h-[25px] mx-auto bg-[#F8D3D5] hover:bg-[#DB232E] rounded-full transition-all duration-150"
        onClick={() => removeFromCart()}
      >
        <CrossSVG className="fill-current text-[#DB232E] group-hover:text-[#F3F3F3] transform translate-x-[7.5px]" />
      </button>
    </div>
  )
}

export default CartProductList
