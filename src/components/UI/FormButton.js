import React from "react"
// import { Link } from "gatsby"

const FormButton = props => {
  return (
    <button
      {...props}
      className={`bg-brandPink pl-6 pr-16 py-3 ${
        props.font ? props.font : "font-frankRuhlLibre text-white text-xl"
      } font-bold rounded-3xl relative`}
    >
      {props.children}
      <div
        className={`absolute ${
          props.className ? props.className : "border-brandDark"
        } bg-brandPink rounded-full flex items-center justify-center`}
        style={{
          top: "-5px",
          right: "-18px",
          transform: "scale(1.05)",
          borderWidth: "6px",
          width: "63px",
          height: "63px",
        }}
      >
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.47053 0.766991C5.89053 1.18699 6.3222 1.60699 6.76553 2.02699C7.2322 2.42366 7.76886 2.89032 8.37553 3.42699C9.00553 3.96366 9.72886 4.61699 10.5455 5.38699C11.3622 6.15699 12.3422 7.11366 13.4855 8.25699C12.3189 9.49366 11.3272 10.5203 10.5105 11.337C9.69386 12.1303 8.97053 12.807 8.34053 13.367C7.73386 13.927 7.1972 14.4287 6.73053 14.872C6.26386 15.292 5.80886 15.7237 5.36553 16.167H0.185529C0.815529 15.6303 1.4572 15.0937 2.11053 14.557C2.76386 14.0203 3.4522 13.4487 4.17553 12.842C4.9222 12.212 5.70386 11.5353 6.52053 10.812C7.36053 10.0653 8.25886 9.23699 9.21553 8.32699C7.9322 7.13699 6.8472 6.15699 5.96053 5.38699C5.0972 4.61699 4.3272 3.96366 3.65053 3.42699C2.9972 2.86699 2.4022 2.38866 1.86553 1.99199C1.3522 1.59533 0.803863 1.18699 0.220529 0.766991H5.47053Z"
            fill="white"
          />
        </svg>
      </div>
    </button>
  )
}

export default FormButton
