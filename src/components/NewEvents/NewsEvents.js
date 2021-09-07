import React from "react"
import { Link } from "gatsby"
import Marquee from "react-fast-marquee"
import { motion } from "framer-motion"

const NewsEvents = () => {
  return (
    <section className="bg-black py-16">
      <div className="font-bebas text-8xl text-brandLight">
        <Marquee speed={100} gradient={false} pauseOnHover>
          <motion.span>
            <Link
              to="/events"
              className="inline-flex items-center transform transition-all duration-300 hover:-skew-x-6"
            >
              News & Events{" "}
              <span className="inline-block w-6 h-6 bg-brandLight rounded-full mx-8" />
            </Link>
          </motion.span>
          <Link
            to="/reservations"
            className="inline-flex items-center transform transition-all duration-300 hover:-skew-x-6"
          >
            Reservations{" "}
            <span className="inline-block w-6 h-6 bg-brandLight rounded-full mx-8" />
          </Link>
          <Link
            to="/book"
            className="inline-flex items-center transform transition-all duration-300 hover:-skew-x-6"
          >
            Book Now{" "}
            <span className="inline-block w-6 h-6 bg-brandLight rounded-full mx-8" />
          </Link>
        </Marquee>
      </div>
    </section>
  )
}

export default NewsEvents
