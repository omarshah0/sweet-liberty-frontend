import React, { Fragment } from "react"
import { Link } from "gatsby"
import { useSelector } from "react-redux"

import Layout from "../components/Layout"
import { Main, Container } from "../components/UI"
import CartProductList from "../components/CartProductList"

const CartPage = () => {
  const { cartReducer: cart } = useSelector(state => state)
  console.log("Cart is ", cart)

  function totalPriceOfProducts(products) {
    let price = 0
    products.map(p => {
      const int = parseFloat(p.price)
      price += int
    })
    return price
  }

  return (
    <Layout smallLogo>
      <Main className="bg-white overflow-hidden md:pt-48  lg:pb-[163px]">
        <Container>
          {cart.products.length === 0 ? (
            <div className="bg-brandDark px-9 py-6 font-bebas text-center text-white leading-none mb-20">
              <h2 className="mb-4 text-4xl">Cart is Empty</h2>
              <Link
                to="/shop"
                className="text-brandPink hover:text-white transition-all duration-100 text-base"
              >
                Go to Shop
              </Link>
            </div>
          ) : (
            <Fragment>
              <h1 className="text-brandPink font-bebas text-[40px] leading-none mb-5">
                Shopping Cart
              </h1>
              <div className="hidden md:flex justify-between bg-brandDark px-9 py-6 font-bebas text-[21px] text-white leading-none rounded-t-lg">
                <h2 className="flex-300">Product Details</h2>
                <h2 className="flex-100">Price</h2>
                <h2 className="flex-100">Quantity</h2>
              </div>
              <div className="bg-gray-50 md:px-9 md:py-10">
                {cart.products.map(p => (
                  <CartProductList className="mb-6" product={p} />
                ))}
              </div>
              <div className="flex justify-between items-center  mb-10">
                <Link
                  to="/checkout"
                  className="bg-brandPink text-white font-bebas text-[21px] leading-[28px] py-[14px] px-[40px] rounded"
                >
                  Checkout
                </Link>
                <span className="font-bebas text-brandDark text-lg">
                  Sub Total <span>${totalPriceOfProducts(cart.products)}</span>
                </span>
              </div>
            </Fragment>
          )}
        </Container>
      </Main>
    </Layout>
  )
}

export default CartPage
