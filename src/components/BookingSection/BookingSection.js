import React from "react"
import { BookingCard } from "../UI"

const BookingSection = () => {
  return (
    <section className="bg-black pb-36 transform -translate-y-10">
      <div className="px-32">
        <BookingCard
          title="Book A Party"
          linkTitle="Book Now"
          link="/book"
          className="mb-20"
        />
        <BookingCard
          title="Make A Reservation"
          linkTitle="Reservation"
          link="/reservation"
        />
      </div>
    </section>
  )
}

export default BookingSection
