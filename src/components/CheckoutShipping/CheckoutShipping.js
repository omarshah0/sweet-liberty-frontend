import React from "react"

import { CheckoutButton } from "../UI"

const CheckoutShipping = ({ setStep }) => {
  return (
    <div className="font-sourceSansProBold font-bold">
      <div className="border-[1px] border-[#D1D5DB] flex justify-between bg-gray-100 px-6 py-4">
        <div>
          <span className="mr-7 text-[#2A2D36] text-opacity-50">Contact: </span>
          <spa className="text-[#2A2D36] text-lg">+1 123-456-7891</spa>
        </div>
        <button className="text-blue-500">Change</button>
      </div>
      <div className="flex justify-between bg-gray-100 px-6 py-4 border-b-[1px] border-l-[1px] border-r-[1px] border-[#D1D5DB] mb-[50px]">
        <div>
          <span className="mr-7 text-[#2A2D36] text-opacity-50">Contact: </span>
          <spa className="text-[#2A2D36] text-lg">+1 123-456-7891</spa>
        </div>
        <button className="text-blue-500">Change</button>
      </div>
      <div>
        <h2 className="mb-[38px] text-[20px]">Shipping Method</h2>
        <div className="border-[1px] border-[#D1D5DB] flex items-center justify-between bg-gray-100 px-6 py-4 min-h-[98px]">
          <div className="flex items-center">
            <span className="mr-9">cheema</span>
            <div>
              <span className="block mr-7 text-[#2A2D36] font-normal leading-none">
                Economy
              </span>
              <span className="block text-[#2A2D36] text-opacity-50 font-normal">
                5 to 8 business days
              </span>
            </div>
          </div>
          <span>Free</span>
        </div>
        <div className="border-b-[1px] border-l-[1px] border-r-[1px] flex items-center justify-between bg-gray-100 px-6 py-4 min-h-[98px] mb-6">
          <div className="flex items-center">
            <span className="mr-9">cheema</span>
            <div>
              <span className="block mr-7 text-[#2A2D36] font-normal leading-none">
                Standard
              </span>
              <span className="block text-[#2A2D36] text-opacity-50 font-normal">
                3 to 4 business days
              </span>
            </div>
          </div>
          <span>$9.90</span>
        </div>
        <CheckoutButton
          title="Continue to Payment"
          onClick={() => setStep(3)}
          className="mr-10"
        />
        <button onClick={() => setStep(1)} className="text-blue-500">
          Return to Information
        </button>
      </div>
    </div>
  )
}

export default CheckoutShipping
