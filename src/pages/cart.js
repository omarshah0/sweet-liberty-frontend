import React, { Fragment } from "react"
import { Link } from "gatsby"
import { useRecoilValue } from "recoil"

import Layout from "../components/Layout"
import { Main, Container } from "../components/UI"
import CartProductList from "../components/CartProductList"
import { cartState } from "../system/Atom"

const CartPage = () => {
  const products = useRecoilValue(cartState)
  return (
    <Layout smallLogo>
      <Main className="bg-white overflow-hidden md:pt-48  lg:pb-[163px]">
        <Container>
          {products.length === 0 ? (
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
              <div className="bg-brandDark px-9 py-6 grid product-cart font-bebas text-[21px] text-white leading-none rounded-t-lg">
                <h2 className="product-cart-product">Product Details</h2>
                <h2 className="product-cart-price text-center">Price</h2>
                <h2 className="product-cart-quantity text-center">Quantity</h2>
              </div>
              <div className="bg-gray-50 px-9 py-10">
                {products.map(p => (
                  <CartProductList className="mb-6" product={p} />
                ))}
              </div>
            </Fragment>
          )}
        </Container>
      </Main>
    </Layout>
  )
}

export default CartPage
