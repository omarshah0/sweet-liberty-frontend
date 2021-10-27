import React from "react"

const CheckoutInputField = ({
  type,
  name,
  label,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <div className={`font-bold ${className}`}>
      <label htmlFor={name || "name"} className="text-sm mb-3 inline-block">
        {label}
      </label>
      <input
        type={type || "text"}
        onBlur={onChange}
        name={name || "name"}
        className="w-full rounded-[3px] bg-gray-100 border-[1px] border-gray-300 p-3 font-sourceSansProBold text-base text-[#2A2D36] text-opacity-50 outline-none"
        placeholder={placeholder}
      />
    </div>
  )
}

export default CheckoutInputField
