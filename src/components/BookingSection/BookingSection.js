import React, { useEffect } from "react"
import { BookingCard } from "../UI"

const BookingSection = ({ openModal }) => {
  useEffect(() => {
    window.SevenroomsWidget.init({
      venueId: "mysweetliberty",
      triggerId: ["sr-res-bookingbutton"],
      type: "reservations",
    })
  })
  return (
    <section className="bg-black pb-36 transform -mt-12 relative" id="booking">
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
          id="sr-res-bookingbutton"
        />
      </div>
    </section>
  )
}

export default BookingSection
