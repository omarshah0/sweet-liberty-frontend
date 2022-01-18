import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useSelector } from "react-redux"

const CheckoutProducts = ({ step, checkoutData }) => {
  const { cartReducer: cart } = useSelector(state => state)
  let subTotal = 0
  cart.products.map(p => {
    const productTotalWithQuantity = parseInt(p.price) * parseInt(p.quantity)
    subTotal += productTotalWithQuantity
  })
  const total = checkoutData.shippingPrice + subTotal

  return (
    <div className="font-bebas">
      {React.Children.toArray(
        cart.products.map((product, index) => (
          <Product
            product={product}
            className={index === cart.products.length - 1 ? "mb-9" : "mb-7"}
          />
        ))
      )}
      <hr className="border-[1px] border-[#979797] mb-9" />
      <div className="flex justify-between items-center text-[#0A0E15] font-sourceSansProBold font-bold mb-8">
        <h2 className="">Subtotal</h2>
        <span>${subTotal}</span>
      </div>
      <div className="flex justify-between text-[#0A0E15] font-sourceSansProBold font-bold mb-9">
        <h2>Shipping</h2>
        <span className="text-gray-500">
          {step === 1
            ? "Calculated at next step"
            : checkoutData.shippingPrice === 0
            ? "Free"
            : `$${checkoutData.shippingPrice}`}
        </span>
      </div>
      <hr className="border-[1px] border-[#979797] mb-9" />
      <div className="flex justify-between text-[#0A0E15] font-sourceSansProBold font-bold">
        <h2>Total</h2>
        <span>${total}</span>
      </div>
    </div>
  )
}

const Product = ({ product, className }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="grid place-items-center w-[60px] h-[60px] bg-gray-300 mr-5">
        <GatsbyImage
          image={
            product.featuredImage.localFile.childImageSharp.gatsbyImageData
          }
          alt={product.featuredImage.altText}
        />
      </div>
      <div className="w-[270px] grid items-center">
        <h2 className="text-lg leading-hero">{product.title}</h2>
        <span className="text-xs leading-none text-gray-500">
          {product.selectedVariant.color} / {product.selectedVariant.size}
        </span>
      </div>
      <span className="w-28">{product.quantity}</span>
      <span className="w-8">${parseInt(product.price)}</span>
    </div>
  )
}

export default CheckoutProducts