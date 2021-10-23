import React, { useState } from "react"
import loadable from "@loadable/component"

import Layout from "../components/Layout"
import CheckoutInformation from "../components/CheckoutInformation/CheckoutInformation"
import CheckoutProducts from "../components/CheckoutProducts"
import { Container } from "../components/UI"
import CheckoutBreadcrumbs from "../components/CheckoutBreadcrumbs/CheckoutBreadcrumbs"

const CheckoutPage = () => {
  const [step, setStep] = useState(1)

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

  return (
    <Layout smallLogo>
      <Container className="flex">
        <div className="left w-[60%] mr-16 bg-white overflow-hidden md:pt-48  lg:pb-[163px]">
          <h1 className="text-brandPink font-bebas text-[40px] leading-none mb-5">
            Checkout
          </h1>
          <CheckoutBreadcrumbs step={step} className="mb-6" />
          {step === 1 ? (
            <CheckoutInformation setStep={setStep} />
          ) : step === 2 ? (
            <CheckoutShipping setStep={setStep} />
          ) : (
            step === 3 && <CheckoutPayment setStep={setStep} />
          )}
        </div>
        <div className="right-block-gray w-[40%] px-20 bg-gray-100 md:pt-48 lg:pb-[163px] relative">
          <CheckoutProducts />
        </div>
      </Container>
    </Layout>
  )
}

export default CheckoutPage
