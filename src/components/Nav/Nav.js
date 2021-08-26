import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import { NavLink, Hours, Contact, Address, Container } from "../UI"

const Nav = ({ hours, closeModal }) => {
  return (
    <motion.div
      className="bg-brandDark fixed inset-0 py-8 md:py-12 lg:py-16"
      initial={{ x: "100vw" }}
      animate={{ x: "0vw" }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.5, ease: "linear" }}
      style={{ zIndex: "9999" }}
    >
      <Container className="relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-6 md:right-16"
        >
          <span className="block border-2 bg-brandLight mb-3 w-14 transform rotate-45 translate-y-2"></span>
          <span className="block border-2 bg-brandLight mb-3 w-14 transform -rotate-45 -translate-y-2"></span>
        </button>
        <div className="md:grid grid-cols-2">
          <nav>
            <ul className="mb-8 md:mb-12">
              <li>
                <NavLink title="About" url="/about" />
              </li>
              <li>
                <NavLink title="Menus" url="/menus" />
              </li>
              <li>
                <NavLink title="Shop" url="/shop" />
              </li>
              <li>
                <NavLink title="Book Now" url="/book" />
              </li>
              <li>
                <NavLink title="Happenings" url="/blog" />
              </li>
              <li>
                <NavLink title="Contact" url="/contact" />
              </li>
            </ul>
            <div>
              <ul className="md:flex">
                <li className="mb-2 md:mr-20">
                  <NavLink title="Homepage" url="/" small />
                </li>
                <li className="flex items-center">
                  <NavLink title="Reservations" url="/reservation" small />
                  <span className="bg-brandLight text-brandDark uppercase text-resky font-bold py-0 px-1 ml-3 mb-1 tracking-widest">
                    Resy
                  </span>
                </li>
              </ul>
            </div>
          </nav>
          <div className="grid md:justify-end md:items-end mt-16 md:mt-0">
            <div>
              <div className="mb-16">
                <Hours hours={hours} />
              </div>
              <Contact className="mb-16" />
              <Address className="mb-12" />
              <ul className="flex mb-1">
                <li className="mr-12">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StaticImage
                      src="../../assets/nav_insta.svg"
                      alt="Sweet Liberty Instagram Handle"
                    />
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StaticImage
                      src="../../assets/nav_fb.svg"
                      alt="Sweet Liberty Facebook Handle"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StaticImage
                      src="../../assets/nav_twitter.svg"
                      alt="Sweet Liberty Twitter Handle"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}

export default Nav
