import React from "react"

const CheckoutProducts = () => {
  return (
    <div className="font-bebas">
      <Product className="mb-7" />
      <Product className="mb-9" />
      <hr className="border-[1px] border-[#979797] mb-9" />
      <div className="flex justify-between text-[#0A0E15] font-sourceSansProBold font-bold mb-8">
        <h2 className="">Subtotal</h2>
        <span>$255</span>
      </div>
      <div className="flex justify-between text-[#0A0E15] font-sourceSansProBold font-bold mb-9">
        <h2>Shipping</h2>
        <span className="text-gray-500">Calculated at next step</span>
      </div>
      <hr className="border-[1px] border-[#979797] mb-9" />
      <div className="flex justify-between text-[#0A0E15] font-sourceSansProBold font-bold">
        <h2>Total</h2>
        <span>$255</span>
      </div>
    </div>
  )
}

export default CheckoutProducts

const Product = ({ className }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <span className="grid place-items-center w-10 h-10 bg-gray-300 mr-5">
        img
      </span>
      <div className="w-[170px] grid items-center">
        <h2 className="text-lg leading-hero">Spanback</h2>
        <span className="text-xs leading-none text-gray-500">Black</span>
      </div>
      <span className="w-28">2</span>
      <span className="w-8">$100</span>
    </div>
  )
}
