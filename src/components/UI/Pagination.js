import React from "react"
import { Link } from "gatsby"

import { RightArrow, LeftArrow } from "../UI"

const Pagination = ({ currentPage, numPages }) => {
  const active = "text-brandRed text-xl font-bold mr-8"
  const normal = "text-xl"
  return (
    <div className="flex justify-center ">
      <Link
        className="w-8 h-8 rounded-full bg-shopBg grid place-items-center mr-8"
        to={currentPage !== 1 ? `/blog` : `/blog`}
      >
        <LeftArrow className="-ml-1" />
      </Link>
      <span className={active}>{currentPage}</span>
      <span className={normal}>{currentPage + 1}</span>
      <Link
        className="w-8 h-8 rounded-full bg-shopBg grid place-items-center ml-8"
        to={currentPage !== 1 ? `/blog` : `/blog/${currentPage + 1}`}
      >
        <RightArrow />
      </Link>
    </div>
  )
}

export default Pagination
