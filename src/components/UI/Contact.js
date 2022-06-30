import React from "react"

const Contact = ({ className }) => {
  return (
    <div className={`footer__contact ${className}`}>
      <h3 className="text-brandLight font-redHatDisplay font-bold text-med mb-4">
        Contact
      </h3>
      <h4 className="text-white font-redHatDisplay text-med mb-3">
        <strong>Call:</strong> <a href="tel:305.763.8217">305.763.8217</a>
      </h4>
      <h4 className="text-white font-redHatDisplay text-med">
        <strong>Email:</strong>{" "}
        <a href="mailto:info@mysweetliberty.com">info@mysweetliberty.com</a>
      </h4>
    </div>
  )
}

export default Contact
