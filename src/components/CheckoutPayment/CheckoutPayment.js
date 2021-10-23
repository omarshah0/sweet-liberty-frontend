import React from "react"

import { CheckoutButton } from "../UI"

const CheckoutPayment = ({ setStep }) => {
  return (
    <div className="font-sourceSansProBold">
      <div className="border-[1px] border-[#D1D5DB] flex justify-between bg-gray-100 px-6 py-4">
        <div>
          <span className="mr-7 text-[#2A2D36] text-opacity-50">Contact: </span>
          <spa className="text-[#2A2D36] text-lg">+1 123-456-7891</spa>
        </div>
      </div>
      <div className="flex justify-between bg-gray-100 px-6 py-4 border-b-[1px] border-l-[1px] border-r-[1px] border-[#D1D5DB]">
        <div>
          <span className="mr-7 text-[#2A2D36] text-opacity-50">Ship to: </span>
          <spa className="text-[#2A2D36] text-lg">
            101 Test ave, Miami FL 33130, United States
          </spa>
        </div>
      </div>
      <div className="flex justify-between bg-gray-100 px-6 py-4 border-b-[1px] border-l-[1px] border-r-[1px] border-[#D1D5DB]">
        <div>
          <span className="mr-7 text-[#2A2D36] text-opacity-50">Method: </span>
          <spa className="text-[#2A2D36] text-lg">Economy • Free</spa>
        </div>
      </div>
      <div>
        <CheckoutButton
          title="Continue to Payment"
          onClick={() => console.log("Submit Form")}
          className="mr-10"
        />
        <button onClick={() => setStep(2)} className="text-blue-500">
          Return to Information
        </button>
      </div>
    </div>
  )
}

export default CheckoutPayment
