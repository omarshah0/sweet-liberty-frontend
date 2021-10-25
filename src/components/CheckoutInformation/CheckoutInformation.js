import React from "react"

import { CheckoutInputField, CheckoutButton } from "../UI"

const CheckoutInformation = ({ setStep, inputHandler }) => {
  return (
    <div>
      <form
        action={e => e.preventDefault()}
        className="font-sourceSansProBold text-[#0A0E15]"
      >
        <h2 className="text-[20px] mb-6 font-bold">Contact Information</h2>
        <CheckoutInputField
          label="Email or mobile phone number"
          type="text"
          name="emailOrMobile"
          placeholder="enter email or phone number"
          onChange={inputHandler}
          className="mb-11"
        />
        <hr className="mb-8 border-[1px] border-gray-300" />
        <h2 className="text-[20px] mb-6 font-bold">Shipping Address</h2>
        <CheckoutInputField
          label="Street Address *"
          type="text"
          name="address"
          placeholder="house number and street name"
          onChange={inputHandler}
          className="mb-11"
        />
        <CheckoutInputField
          label="Apartment, suite, unit, ect. (optional) "
          type="text"
          name="apartmentSuiteUnit"
          placeholder="house number and street name"
          onChange={inputHandler}
          className="mb-11"
        />
        <div className="flex">
          <CheckoutInputField
            label="Town / City *"
            type="text"
            name="townCity"
            placeholder="enter city"
            onChange={inputHandler}
            className="mb-11 mr-5"
          />
          <CheckoutInputField
            label="State *"
            type="text"
            name="state"
            placeholder="enter state"
            onChange={inputHandler}
            className="mb-11 mr-5"
          />
          <CheckoutInputField
            label="ZIP *"
            type="text"
            name="zip"
            placeholder="enter your zip code"
            onChange={inputHandler}
            className="mb-11"
          />
        </div>
      </form>
      <CheckoutButton title="Continue to Shipping" onClick={() => setStep(2)} />
    </div>
  )
}

export default CheckoutInformation
