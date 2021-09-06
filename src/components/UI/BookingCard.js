import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const BookingCard = ({ img, title, link, linkTitle, className }) => {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="mr-5">
        <StaticImage src="../../assets/Booking/card.png" alt="Bookigng" />
      </div>
      <div className="w-4/12 flex flex-col h-full">
        <h3 className="font-bebas text-booking text-brandPink leading-hero">
          {title}
        </h3>
        <Link
          to={link}
          className="font-frankRuhlLibre font-bold text-brandLight text-6xl align-baseline"
        >
          {linkTitle}
        </Link>
      </div>
    </div>
  )
}

export default BookingCard
