import React, { Fragment } from "react"
import { Link } from "gatsby"

const Breadcumbs = ({ pathname, className }) => {
  const rawBreads = pathname.split("/")
  const breads = rawBreads.filter(b => b)
  return (
    <div className={className}>
      {React.Children.toArray(
        breads.map((b, i) => (
          <Fragment>
            <Link
              to={`/${b}`}
              className={`font-sourceSansProBold text-[20px] text-brandDark mr-5 capitalize ${
                i + 1 === breads.length
                  ? ""
                  : "opacity-50 hover:opacity-100 transition-all duration-100"
              }`}
            >
              {b.replace(/-/g, " ")}
            </Link>
            {!i + 1 === breads.length && (
              <RightArrow className="fill-current text-brandDark inline-block mr-5 opacity-50" />
            )}
          </Fragment>
        ))
      )}
    </div>
  )
}

export default Breadcumbs

const RightArrow = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      className={className}
    >
      <path d="M1.00176 15.0136C0.768108 15.0141 0.541672 14.9327 0.36176 14.7836C0.260501 14.6997 0.1768 14.5966 0.115448 14.4802C0.0540956 14.3639 0.0162993 14.2366 0.00422342 14.1056C-0.00785244 13.9746 0.00602958 13.8425 0.0450741 13.7169C0.0841185 13.5913 0.147558 13.4747 0.23176 13.3736L4.71176 8.01361L0.39176 2.64361C0.308694 2.54132 0.246663 2.42363 0.209231 2.29729C0.171799 2.17095 0.159705 2.03846 0.173645 1.90743C0.187584 1.7764 0.227281 1.64942 0.290454 1.53378C0.353628 1.41815 0.439033 1.31614 0.54176 1.23361C0.645226 1.14258 0.766392 1.07391 0.897654 1.03192C1.02892 0.98993 1.16744 0.975527 1.30453 0.989611C1.44163 1.0037 1.57433 1.04597 1.69431 1.11377C1.81429 1.18157 1.91897 1.27344 2.00176 1.38361L6.83176 7.38361C6.97884 7.56255 7.05925 7.78699 7.05925 8.01861C7.05925 8.25024 6.97884 8.47468 6.83176 8.65361L1.83176 14.6536C1.73144 14.7746 1.60401 14.8703 1.4598 14.9328C1.31559 14.9954 1.15867 15.0231 1.00176 15.0136Z" />
    </svg>
  )
}
