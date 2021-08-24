import React from "react"
import { Link } from "gatsby"

import { RightArrow, LeftArrow } from "../UI"

const Pagination = ({
  nextPagePath,
  previousPagePath,
  humanPageNumber,
  numberOfPages,
}) => {
  console.log("Next Page is ", nextPagePath.length)
  console.log("Previous Page is ", previousPagePath.length)
  return (
    <div className="flex justify-center ">
      <Link
        className={`w-8 h-8 rounded-full bg-shopBg grid place-items-center mr-4 ${
          previousPagePath.length !== 0
            ? ""
            : "cursor-not-allowed pointer-events-none"
        }`}
        to={previousPagePath}
        disabled={true}
      >
        <LeftArrow className="-ml-1" />
      </Link>

      <span className="text-brandRed text-xl font-bold mx-4">
        {humanPageNumber}
      </span>
      {humanPageNumber < numberOfPages && (
        <Link to={nextPagePath} className="text-xl mx-4">
          {humanPageNumber + 1}
        </Link>
      )}

      <Link
        className={`w-8 h-8 rounded-full bg-shopBg grid place-items-center ml-4 ${
          nextPagePath.length !== 0
            ? ""
            : "cursor-not-allowed pointer-events-none "
        }`}
        to={nextPagePath}
      >
        <RightArrow />
      </Link>
    </div>
  )
}

export default Pagination
