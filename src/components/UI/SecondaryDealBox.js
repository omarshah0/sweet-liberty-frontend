import React from "react"

const SecondaryDealBox = ({ className, data }) => {
  return (
    <div
      className={`bg-brandPink text-white text-center max-w-xl mx-auto px-20 py-9 ${className} flex justify-between`}
    >
      <h3 className="text-2xl text-white font-frankRuhlLibre">{data.Name}</h3>
      <p className="font-cantataOne">{data.Price}pp</p>
    </div>
  )
}

export default SecondaryDealBox
