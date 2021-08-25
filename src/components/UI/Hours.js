import React, { Fragment } from "react"

const Hours = ({ hours }) => {
  return (
    <Fragment>
      <h3 className="text-brandLight font-redHatDisplay font-bold text-med mb-4">
        Hours
      </h3>
      {React.Children.toArray(
        hours.hour.map(
          h =>
            h.open && (
              <h4 className="text-white font-redHatDisplay text-med mb-3">
                <strong>{h.day}: </strong>
                <span className="uppercase">
                  {h.openingTime} - {h.closingTime}
                </span>
              </h4>
            )
        )
      )}
    </Fragment>
  )
}

export default Hours
