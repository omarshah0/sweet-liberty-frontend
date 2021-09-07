import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const BookingCard = ({ img, title, link, linkTitle, className }) => {
  return (
    // <div className={`flex items-start ${className}`}>
    <div className={`grid grid-cols-2 ${className} group cursor-pointer`}>
      <div className="transform transition duration-300 group-hover:scale-105">
        <StaticImage src="../../assets/Booking/card.png" alt="Bookigng" />
      </div>
      <div className="flex flex-col -ml-12">
        <h3 className="font-bebas text-booking text-brandPink leading-hero w-3/4">
          {title}
        </h3>
        <Link
          to={link}
          className="font-frankRuhlLibre font-bold text-brandLight text-6xl mt-auto -mb-3"
        >
          {linkTitle}{" "}
          <span className="w-16 h-16 font-cantataOne rounded-full inline-grid place-items-center border-4 border-brandLight text-brandLight text-5xl mr-1">
            <span className="relative left-1 bottom-1">{">"}</span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BookingCard
