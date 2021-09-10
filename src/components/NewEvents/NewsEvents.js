import React from "react"
import Marquee from "react-fast-marquee"

const NewsEvents = () => {
  return (
    <section className="bg-black py-20">
      <div className="font-bebas text-8xl text-brandLight">
        <Marquee speed={100} gradient={false}>
          <p className="inline-flex items-center transform transition-all duration-300 hover:-skew-x-6">
            News & Events{" "}
            <span className="inline-block w-6 h-6 bg-brandLight rounded-full mx-8" />
          </p>
          <p className="inline-flex items-center transform transition-all duration-300 hover:-skew-x-6">
            Reservations{" "}
            <span className="inline-block w-6 h-6 bg-brandLight rounded-full mx-8" />
          </p>
          <p className="inline-flex items-center transform transition-all duration-300 hover:-skew-x-6">
            Book Now{" "}
            <span className="inline-block w-6 h-6 bg-brandLight rounded-full mx-8" />
          </p>
        </Marquee>
      </div>
    </section>
  )
}

export default NewsEvents
