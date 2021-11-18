import React from "react"
import { BookingCard } from "../UI"

const BookingSection = ({ openModal }) => {
  return (
    <section className="bg-black pb-36 transform -mt-12 relative">
      <div className="md:px-32">
        <BookingCard
          title="Book A Party"
          linkTitle="Book Now"
          className="mb-20"
          onClick={openModal}
        />
        <BookingCard
          title="Make A Reservation"
          linkTitle="Reservation"
          onClick={() => {}}
          id="sr-res-root"
        />
      </div>
    </section>
  )
}

export default BookingSection
