import React from "react"

const NewsEvents = () => {
  return (
    <section className="bg-black pt-8 pb-20">
      <svg viewBox="0 0 1000 200">
        <path
          id="text-curve"
          d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0"
          fill="none"
          stroke="#000"
        />
        <text className="font-bebas text-7xl tracking-wider fill-current text-brandLight">
          <textPath
            href="#text-curve"
            startOffset="0"
            lengthAdjust="spacingAndGlyphs"
          >
            News & Events • Reservations • Book Now • News & Events •
            Reservations • Book Now •
            <animate
              attributeName="startOffset"
              from="100%"
              to="-100%"
              begin="0s"
              dur="30s"
              repeatCount="indefinite"
              keyTimes="0;1"
              calcMode="spline"
              keySplines="0 0 1 1"
            />
          </textPath>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M4.88875 22.5533C2.22097 20.2129 0.833728 17.3405 0.620306 13.7235C0.406884 10.2129 1.47399 7.12777 3.82164 4.4682C6.16928 1.915 9.05046 0.425641 12.6786 0.212875C16.2001 0.000109013 19.2947 1.06394 21.9625 3.40437C24.6303 5.74479 26.0175 8.61713 26.231 12.2341C26.4444 15.7448 25.3773 18.8299 23.0296 21.4895C20.682 24.1491 17.8008 25.532 14.1726 25.7448C10.6512 25.9576 7.55652 24.8937 4.88875 22.5533Z"
            fill="#C0F3D4"
          />
        </text>
      </svg>
    </section>
  )
}

export default NewsEvents
