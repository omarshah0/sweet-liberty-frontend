import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { NavLink, Hours, Contact, Address } from "../UI"

const Nav = ({ hours, modal, closeModal }) => {
  return (
    <div
      className={`fixed inset-0 bg-brandDark transform ${
        modal ? "translate-x-[0vw]" : "translate-x-[100vw]"
      }`}
    >
      <div className="relative max-w-screen-2xl mx-auto">
        <button onClick={closeModal} className="absolute top-0 right-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="currentColorF"
          >
            <path
              d="M19.8787 59.7334L59.7338 19.8783"
              stroke="#C0F3D4"
              strokeWidth="3"
            />
            <path
              d="M59.4419 60.1235L19.5868 20.2684"
              stroke="#C0F3D4"
              strokeWidth="3"
            />
          </svg>
        </button>
        <div className="md:grid grid-cols-2 min-h-screen mx-[7.6vw]  my-[67px]">
          <nav>
            <ul className="mb-10">
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
          <div className="">
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
      </div>
    </div>
  )
}

export default Nav
