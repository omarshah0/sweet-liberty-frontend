import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  NavLink,
  Hours,
  Contact,
  Address,
  Container,
  FoodLink,
  NavLinkButton,
} from "../UI"

import { SevenRoomSvg } from "../UI/Svgs"

const Nav = ({ hours, modal, location }) => {
  const [subMenu, setSubMenu] = useState(false)
  const { allDatoCmsMenu } = useStaticQuery(graphql`
    query getAllMenusNav {
      allDatoCmsMenu {
        nodes {
          menuNameNavigation
          menuIcon {
            url
          }
          slug
        }
      }
    }
  `)

  useEffect(() => {
    setSubMenu(false)
  }, [location])

  useEffect(() => {
    window.SevenroomsWidget.init({
      venueId: "mysweetliberty",
      triggerId: ["sr-res-navbutton"],
      type: "reservations",
    })
  }, [])

  return (
    <div
      className={`py-8 bg-brandDark fixed inset-0 z-[10] ${
        modal ? "translate-x-[0vw]" : "translate-x-[100vw]"
      }`}
    >
      <Container className="lg:flex min-h-screen overflow-y-auto">
        {/* ---------------------- Left Block Nav ----------------------------- */}
        <nav className="lg:w-1/2 flex flex-col justify-between lg:justify-between relative h-full">
          {subMenu && (
            <button
              className="absolute top-0 left-0"
              onClick={() => setSubMenu(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="36"
                viewBox="0 0 58 36"
                fill="none"
              >
                <path d="M2 18L24.5 33.5" stroke="#C0F3D4" stroke-width="5" />
                <path d="M24.5 3L2 18.5" stroke="#C0F3D4" stroke-width="5" />
                <path
                  d="M1 18.5L57.3637 18.5"
                  stroke="#C0F3D4"
                  stroke-width="5"
                />
              </svg>
            </button>
          )}

          {!subMenu ? (
            <ul>
              <li>
                <NavLink title="About" url="/#about" />
              </li>
              <li>
                <NavLinkButton title="Menus" onClick={() => setSubMenu(true)} />
              </li>
              <li>
                <NavLink title="Shop ." url="" />
                <span className="ml-4">
                  <NavLink title="Coming Soon" url="" small />
                </span>
              </li>
              <li className="cursor-pointer">
                <NavLink title="Book Now" url="/#booking" />
              </li>
              <li>
                <NavLink title="Happenings" url="/blog" />
              </li>
              <li>
                <NavLink title="Contact" url="/#contact" />
              </li>
            </ul>
          ) : (
            <ul className="mt-[90px] md:mt-[50px]">
              {allDatoCmsMenu.nodes.map(m => (
                <li key={m.slug}>
                  <FoodLink
                    title={m.menuNameNavigation}
                    url={`/menu/${m.slug}`}
                  />
                </li>
              ))}
            </ul>
          )}

          <div className="overflow-hidden mt-[30px] md:mt-[50px]">
            <ul className="md:flex">
              <li className="md:mr-[35px]">
                <NavLink title="Homepage" url="/" small />
              </li>
              <li
                className="flex items-center cursor-pointer"
                id="sr-res-navbutton"
              >
                <NavLink title="Reservations" small />
                <SevenRoomSvg />
              </li>
            </ul>
          </div>
        </nav>
        {/* ---------------------- Right Block ----------------------------- */}
        <div className="hidden lg:w-1/2 lg:flex flex-col justify-end lg:items-end">
          <div>
            <div className="mb-16">
              <Hours hours={hours} />
            </div>
            <Contact className="mb-16" />
            <Address className="mb-12" />
            <ul className="flex">
              <li className="mr-12">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.6058 1.93014C11.1152 1.86066 11.5964 1.84521 15.4413 1.84521C19.2861 1.84521 19.7674 1.86194 21.2755 1.93014C22.7836 1.99834 23.813 2.23896 24.7137 2.58768C25.6569 2.94411 26.5126 3.50128 27.2203 4.22187C27.9409 4.9283 28.4968 5.78271 28.8519 6.7272C29.2019 7.62794 29.4413 8.65735 29.5108 10.1629C29.5802 11.6748 29.5957 12.1561 29.5957 15.9996C29.5957 19.8445 29.579 20.3257 29.5108 21.8351C29.4426 23.3406 29.2019 24.37 28.8519 25.2708C28.4968 26.2154 27.94 27.0712 27.2203 27.7787C26.5126 28.4993 25.6569 29.0551 24.7137 29.4103C23.813 29.7603 22.7836 29.9996 21.278 30.0691C19.7674 30.1386 19.2861 30.154 15.4413 30.154C11.5964 30.154 11.1152 30.1373 9.6058 30.0691C8.10028 30.0009 7.07087 29.7603 6.17014 29.4103C5.22555 29.0551 4.36972 28.4983 3.66223 27.7787C2.94213 27.0718 2.38488 26.2164 2.02933 25.2721C1.68062 24.3713 1.44128 23.3419 1.37179 21.8364C1.30231 20.3244 1.28687 19.8432 1.28687 15.9996C1.28687 12.1548 1.30359 11.6735 1.37179 10.1654C1.43999 8.65735 1.68062 7.62794 2.02933 6.7272C2.38541 5.78282 2.94308 4.92742 3.66352 4.22058C4.37001 3.50064 5.22497 2.9434 6.16885 2.58768C7.06959 2.23896 8.099 1.99963 9.60451 1.93014H9.6058ZM21.1609 4.47794C19.6683 4.40974 19.2205 4.39558 15.4413 4.39558C11.662 4.39558 11.2143 4.40974 9.72161 4.47794C8.34091 4.54099 7.59201 4.77132 7.09275 4.96562C6.43264 5.22297 5.96039 5.52794 5.46499 6.02334C4.99538 6.48021 4.63397 7.03639 4.40727 7.6511C4.21297 8.15036 3.98264 8.89926 3.91959 10.28C3.85139 11.7726 3.83723 12.2204 3.83723 15.9996C3.83723 19.7789 3.85139 20.2266 3.91959 21.7193C3.98264 23.1 4.21297 23.8489 4.40727 24.3482C4.63374 24.9619 4.99532 25.5191 5.46499 25.9759C5.92179 26.4456 6.47896 26.8072 7.09275 27.0336C7.59201 27.2279 8.34091 27.4583 9.72161 27.5213C11.2143 27.5895 11.6608 27.6037 15.4413 27.6037C19.2218 27.6037 19.6683 27.5895 21.1609 27.5213C22.5416 27.4583 23.2905 27.2279 23.7898 27.0336C24.4499 26.7763 24.9222 26.4713 25.4176 25.9759C25.8872 25.5191 26.2488 24.9619 26.4753 24.3482C26.6696 23.8489 26.8999 23.1 26.963 21.7193C27.0312 20.2266 27.0453 19.7789 27.0453 15.9996C27.0453 12.2204 27.0312 11.7726 26.963 10.28C26.8999 8.89926 26.6696 8.15036 26.4753 7.6511C26.2179 6.99099 25.913 6.51874 25.4176 6.02334C24.9607 5.55376 24.4045 5.19236 23.7898 4.96562C23.2905 4.77132 22.5416 4.54099 21.1609 4.47794ZM13.6334 20.363C14.643 20.7833 15.7673 20.8401 16.8142 20.5235C17.861 20.207 18.7655 19.5368 19.3731 18.6275C19.9808 17.7182 20.2538 16.6261 20.1457 15.5378C20.0376 14.4495 19.5551 13.4325 18.7804 12.6605C18.2866 12.167 17.6895 11.7891 17.0321 11.554C16.3748 11.319 15.6734 11.2326 14.9787 11.3012C14.2839 11.3697 13.613 11.5914 13.0142 11.9503C12.4154 12.3093 11.9036 12.7965 11.5157 13.377C11.1279 13.9575 10.8735 14.6167 10.771 15.3073C10.6685 15.9979 10.7203 16.7026 10.9229 17.3707C11.1254 18.0388 11.4735 18.6537 11.9422 19.1711C12.4109 19.6886 12.9885 20.0956 13.6334 20.363ZM10.2968 10.8551C10.9724 10.1796 11.7744 9.64366 12.6571 9.27803C13.5398 8.91241 14.4859 8.72423 15.4413 8.72423C16.3967 8.72423 17.3428 8.91241 18.2255 9.27803C19.1081 9.64365 19.9102 10.1796 20.5858 10.8551C21.2613 11.5307 21.7972 12.3328 22.1629 13.2155C22.5285 14.0981 22.7167 15.0442 22.7167 15.9996C22.7167 16.955 22.5285 17.9011 22.1629 18.7838C21.7972 19.6665 21.2613 20.4685 20.5858 21.1441C19.2214 22.5085 17.3708 23.275 15.4413 23.275C13.5117 23.275 11.6612 22.5085 10.2968 21.1441C8.93239 19.7797 8.16588 17.9292 8.16588 15.9996C8.16588 14.0701 8.93239 12.2195 10.2968 10.8551ZM24.3302 9.80771C24.4977 9.64979 24.6317 9.45988 24.7244 9.24923C24.8171 9.03857 24.8666 8.81146 24.8699 8.58134C24.8733 8.35121 24.8304 8.12276 24.7439 7.90949C24.6574 7.69623 24.529 7.50249 24.3662 7.33975C24.2035 7.17701 24.0098 7.04858 23.7965 6.96206C23.5832 6.87554 23.3548 6.83268 23.1246 6.83604C22.8945 6.83939 22.6674 6.88889 22.4568 6.98159C22.2461 7.07429 22.0562 7.20831 21.8983 7.37573C21.5911 7.70132 21.423 8.13379 21.4295 8.58134C21.436 9.02889 21.6167 9.45627 21.9332 9.77277C22.2497 10.0893 22.6771 10.27 23.1246 10.2765C23.5722 10.283 24.0047 10.1149 24.3302 9.80771Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li className="mr-12">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M22.6859 17.9299L23.5438 12.3412H18.1809V8.71444C18.1809 7.18576 18.9298 5.69473 21.3319 5.69473H23.7697V0.936914C23.7697 0.936914 21.5577 0.55957 19.4423 0.55957C15.0261 0.55957 12.1396 3.23668 12.1396 8.08232V12.3422H7.23022V17.9309H12.1396V31.4419H18.1809V17.9309L22.6859 17.9299Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="30.8824"
                          height="30.8824"
                          fill="white"
                          transform="translate(0.0588379 0.558594)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M29.7134 4.43188C29.7134 4.43188 27.1167 5.96571 25.6729 6.40063C24.898 5.50956 23.868 4.878 22.7224 4.59135C21.5768 4.3047 20.3708 4.37681 19.2675 4.79791C18.1642 5.21901 17.2169 5.9688 16.5536 6.94586C15.8903 7.92292 15.5431 9.08011 15.559 10.2609V11.5477C13.2976 11.6063 11.0569 11.1048 9.03635 10.0878C7.01579 9.07077 5.27811 7.56984 3.97807 5.71865C3.97807 5.71865 -1.16899 17.2995 10.4119 22.4466C7.76184 24.2454 4.60493 25.1474 1.40454 25.0201C12.9854 31.4539 27.1398 25.0201 27.1398 10.2223C27.1398 9.86461 27.1038 9.50689 27.0369 9.15431C28.3494 7.85983 29.7134 4.43188 29.7134 4.43188Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="30.8824"
                          height="30.8824"
                          fill="white"
                          transform="translate(0.117676 0.558594)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Nav
