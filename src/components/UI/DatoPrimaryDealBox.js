import React from "react"

const DatoPrimaryDealBox = ({ className, data }) => {
  return (
    <div
      className={`bg-brandRed text-white text-center max-w-xl mx-auto px-20 py-9 ${className}`}
    >
      <h3 className="text-2xl text-white font-frankRuhlLibre mb-1 uppercase">
        {data.title}
      </h3>
      <p className="mb-1 font-cantataOne flex justify-center gap-x-20">
        <span>
          {data.firstPriceTitle} ....{data.firstPrice}*
        </span>
        <span>
          {data.secondPriceTitle} ....{data.secondPrice}*
        </span>
      </p>
      <p className="mb-4 text-xs font-cantataOne">
        *Prices subject to change based on market
      </p>
      <p className="text-xxs font-cantataOne">
        CONSUMER INFORMATION
        <br /> {data.consumerInformation}
      </p>
    </div>
  )
}

export default DatoPrimaryDealBox
