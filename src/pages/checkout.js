import React, { useState } from "react"
import loadable from "@loadable/component"

import Layout from "../components/Layout"
import CheckoutInformation from "../components/CheckoutInformation/CheckoutInformation"
import CheckoutProducts from "../components/CheckoutProducts"
import { Container } from "../components/UI"
import CheckoutBreadcrumbs from "../components/CheckoutBreadcrumbs/CheckoutBreadcrumbs"

const CheckoutPage = () => {
  const [step, setStep] = useState(1)
  const [checkoutData, setCheckoutDta] = useState({
    emailOrMobile: "",
    address: "",
    apartmentSuiteUnit: "",
    townCity: "",
    state: "",
    zip: "",
    countryRegion: "",
    shippingPrice: 0,
  })

  const CheckoutShipping = loadable(
    () => import("../components/CheckoutShipping"),
    {
      fallback: <div>Loading...</div>,
    }
  )

  const CheckoutPayment = loadable(
    () => import("../components/CheckoutPayment"),
    {
      fallback: <div>Loading...</div>,
    }
  )

  const inputHandler = e => {
    setCheckoutDta({ ...checkoutData, [e.target.name]: e.target.value })
  }

  const shippingMethodHandler = price => {
    setCheckoutDta({ ...checkoutData, shippingPrice: price })
  }

  console.log("Shipping Checkout Data ", checkoutData)
  return (
    <Layout smallLogo>
      <div className="pt-28">
        <Container>
          <h1 className="text-brandPink font-bebas text-[40px] leading-none mb-5">
            Checkout
          </h1>
        </Container>
        <div className="bg-gray-100 border-t-2 border-t-[#979797] border-b-2 border-b-[#979797] py-5">
          <Container>
            <CheckoutProducts step={step} checkoutData={checkoutData} />
          </Container>
        </div>
        <div className="left md:w-[60%] md:mr-16 bg-white overflow-hidden pt-28 md:pt-48 lg:pb-[163px] order-2">
          <CheckoutBreadcrumbs step={step} className="mb-6" />
          {step === 1 ? (
            <CheckoutInformation
              setStep={setStep}
              inputHandler={inputHandler}
            />
          ) : step === 2 ? (
            <CheckoutShipping
              setStep={setStep}
              shippingMethodHandler={shippingMethodHandler}
            />
          ) : (
            step === 3 && <CheckoutPayment setStep={setStep} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutPage
