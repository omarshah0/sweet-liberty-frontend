import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const BookingCard = ({ title, onClick, linkTitle, className, id }) => {
  return (
    <div
      className={`block xl:grid grid-cols-2 ${className} group px-2 lg:px-0`}
    >
      <div className="transform transition duration-300 group-hover:scale-[1.01] max-w-[568px] flex justify-end xl:ml-auto mb-[12px]">
        <StaticImage
          src="../../assets/Booking/card.png"
          alt="Bookigng"
          placeholder="blurred"
        />
      </div>
      <div className="flex flex-col items-start xl:ml-3">
        <h3 className="font-bebas text-[100px] md:text-booking text-brandPink leading-hero xl:w-3/4">
          {title}
        </h3>
        <button
          className="font-frankRuhlLibre font-bold text-brandLight text-[2.75rem] md:text-6xl mt-auto -mb-3"
          onClick={onClick}
          id={id}
        >
          {linkTitle}
          <span className="w-12 h-12 md:w-16 md:h-16 font-cantataOne rounded-full inline-grid place-items-center border-4 border-brandLight text-brandLight text-5xl mr-1">
            <span className="relative left-[1px] md:left-1 bottom-1 text-[2rem]">
              {">"}
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default BookingCard
