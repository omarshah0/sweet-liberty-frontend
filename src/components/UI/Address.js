import React from "react"

const Address = ({ className }) => {
  return (
    <div className={`footer__address ${className}`}>
      <h3 className="text-brandLight font-redHatDisplay font-bold text-med mb-4">
        Address
      </h3>
      <h4 className="text-white font-redHatDisplay text-med mb-3">
        237-B 20th Street
      </h4>
      <h4 className="text-white font-redHatDisplay text-med">
        Miami Beach • FL • 33139
      </h4>
    </div>
  )
}

export default Address
