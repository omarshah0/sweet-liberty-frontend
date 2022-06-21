import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Marquee from "react-fast-marquee"

const MiamiIsShit = () => {
  return (
    <section className="bg-brandDark relative cutter-top">
      <div className="hidden md:inline-block absolute -top-80 left-0 z-10 pointer-events-none">
        <StaticImage
          src="../../assets/MiamiIsShit/green_leaf.png"
          alt="Green Leaf"
          placeholder="blurred"
        />
      </div>
      <div className="hidden md:inline-block absolute top-20 right-0 z-10 pointer-events-none">
        <StaticImage
          src="../../assets/MiamiIsShit/red_leaf.png"
          alt="red leaf"
          placeholder="blurred"
        />
      </div>
      <div className="overflow-hidden max-w-1440 mx-auto">
        <div className="md:flex items-center justify-between">
          <svg
            fill="none"
            viewBox="0 0 521 794"
            className="hidden md:block mt-[10px] md:mt-36 relative z-20 left-[18px] md:left-[50px] w-[340px] md:w-[650px] lg:left-[150px] xl:left-0 md:mb-[90px]"
          >
            <path
              fill="#fff"
              d="M112.308 132.754h-19.39V51.283l-19.137 58.23-19.138-58.23v81.471H34.876V0h23.922l14.983 51.157L90.023 0h22.285v132.754ZM203.464 132.754h-61.945v-21.22h19.893v-90.44h-19.893V0h61.945v21.094h-19.515v90.44h19.515v21.22ZM303.56 132.754h-25.181l-4.533-21.473h-21.53l-4.533 21.473h-23.67L251.812 0h23.545l28.203 132.754Zm-33.491-42.062-6.925-42.188-7.428 42.188h14.353ZM393.709 132.754h-19.39V51.283l-19.137 58.23-19.138-58.23v81.471h-19.768V0h23.923l14.983 51.157L371.423 0h22.286v132.754ZM486.124 132.754h-61.82v-21.22h19.893v-90.44h-19.893V0h61.946v21.094h-19.516v90.44h19.516v21.22h-.126ZM61.946 352.538H0v-21.221h19.893v-90.439H0v-21.094h61.946v21.094H42.304v90.439H61.82v21.221h.126ZM161.412 313.886c0 12.379-3.274 22.105-9.695 29.431-6.421 7.326-15.738 10.989-27.699 10.989-12.339 0-21.53-3.031-27.7-9.094-6.17-6.063-9.694-15.158-10.702-27.41h21.782c.63 4.8 2.266 8.21 5.036 10.484 2.77 2.274 7.051 3.411 12.843 3.411 4.155 0 7.428-1.264 10.072-3.79 2.518-2.526 3.777-5.937 3.777-10.231 0-3.663-1.007-6.821-2.895-9.474-1.889-2.652-5.54-5.305-10.828-7.831-4.533-2.147-9.066-4.547-13.724-7.2-4.659-2.526-9.065-5.684-13.472-9.347-4.03-3.537-6.925-7.452-8.814-11.873-1.888-4.295-2.77-9.979-2.77-16.8 0-11.621 3.274-20.715 9.821-27.41 6.547-6.694 15.613-9.978 27.07-9.978 12.213 0 21.026 3.031 26.692 9.094 5.666 6.063 8.562 14.779 8.814 25.768h-21.404c.251-4.674-1.008-8.21-3.778-10.863-2.77-2.526-6.421-3.789-10.954-3.789-5.162 0-8.939 1.137-11.457 3.41-2.518 2.274-3.777 5.558-3.777 9.852 0 3.411.755 6.316 2.14 8.59 1.511 2.273 4.155 4.673 8.058 6.947 2.644 1.768 5.54 3.158 8.436 4.547 2.896 1.263 5.792 2.653 8.562 4.042 2.77 1.39 5.539 2.905 8.309 4.674a44.22 44.22 0 0 1 7.555 6.063c3.903 3.789 6.673 7.831 8.184 12.252 1.636 4.547 2.518 9.726 2.518 15.536ZM345.361 242.141h-28.833v110.397h-23.67V242.141h-28.833v-22.357h81.462v22.357h-.126ZM432.362 352.538h-23.796v-56.083h-25.559v56.083h-23.419V219.784h23.419v54.061h25.559v-54.061h23.796v132.754ZM521 352.538h-67.234V219.784H521v21.094h-43.689v33.851h34.498v21.474h-34.498v34.104H521v22.231ZM160.782 533.67c0 12.379-3.273 22.105-9.695 29.431-6.421 7.326-15.738 10.989-27.699 10.989-12.339 0-21.53-3.031-27.7-9.094-6.169-6.063-9.694-15.158-10.701-27.41h21.781c.63 4.8 2.267 8.21 5.037 10.484 2.77 2.273 7.05 3.41 12.842 3.41 4.155 0 7.429-1.263 10.073-3.789 2.518-2.526 3.777-5.937 3.777-10.231 0-3.664-1.007-6.821-2.896-9.474-1.889-2.652-5.54-5.305-10.828-7.831-4.533-2.148-9.065-4.548-13.724-7.2-4.658-2.526-9.065-5.684-13.472-9.347-4.029-3.537-6.924-7.453-8.813-11.874-1.889-4.294-2.77-9.978-2.77-16.799 0-11.621 3.273-20.715 9.82-27.41 6.548-6.694 15.613-9.979 27.07-9.979 12.213 0 21.027 3.032 26.693 9.095 5.665 6.063 8.561 14.778 8.813 25.768h-21.404c.252-4.674-1.007-8.211-3.777-10.863-2.77-2.526-6.421-3.79-10.954-3.79-5.162 0-8.939 1.137-11.458 3.411-2.518 2.273-3.777 5.558-3.777 9.852 0 3.411.756 6.316 2.141 8.589 1.511 2.274 4.155 4.674 8.058 6.948 2.644 1.768 5.54 3.157 8.435 4.547 2.896 1.263 5.792 2.652 8.562 4.042 2.77 1.389 5.54 2.905 8.31 4.673a44.271 44.271 0 0 1 7.554 6.063c3.903 3.79 6.673 7.832 8.184 12.253 1.637 4.547 2.518 9.726 2.518 15.536ZM249.168 572.322h-23.796v-56.083h-25.559v56.083h-23.418V439.567h23.418v54.062h25.559v-54.062h23.796v132.755ZM335.037 572.322h-61.82v-21.221h19.893v-90.44h-19.893v-21.094h61.945v21.094h-19.515v90.44h19.515v21.221h-.125ZM436.013 461.925h-28.832v110.397H383.51V461.925h-28.832v-22.358h81.461v22.358h-.126ZM204.346 754.464c0 12.884-3.022 22.484-9.191 28.547-6.17 6.063-15.865 9.094-29.085 9.094h-33.868V659.351h36.638c10.954 0 19.138 3.158 24.678 9.474 5.54 6.315 8.31 14.652 8.31 24.883 0 8.084-1.511 14.4-4.407 19.073-2.896 4.674-7.429 8.337-13.346 11.116 6.169 2.021 11.08 5.684 14.731 10.736 3.651 5.179 5.54 11.747 5.54 19.831Zm-25.056-56.967c0-4.042-.377-7.326-1.133-9.852-.755-2.526-1.888-4.421-3.399-5.81-1.511-1.39-3.274-2.4-5.414-2.779-2.141-.505-4.533-.758-7.177-.758h-8.561v38.651h8.184c5.665 0 10.072-1.389 13.094-4.294 2.896-2.905 4.406-7.958 4.406-15.158Zm2.393 54.188c0-5.936-1.637-10.862-4.911-14.652-3.273-3.789-7.428-5.684-12.59-5.684h-10.576v40.294h11.331c2.77 0 5.288-.505 7.303-1.516 2.014-1.01 3.777-2.526 5.162-4.295 1.385-1.894 2.518-3.915 3.148-6.442a26.555 26.555 0 0 0 1.133-7.705ZM300.916 792.105h-29.588l-25.181-52.546v52.546H222.35V659.351h36.639c12.213 0 21.782 3.411 28.707 10.358 6.925 6.947 10.45 16.673 10.45 29.178 0 10.989-2.392 19.326-7.177 25.136-4.784 5.81-11.205 9.852-19.137 12l29.084 56.082Zm-26.944-89.681c0-8.463-1.637-14.147-4.91-17.179-3.274-3.031-8.184-4.547-14.731-4.547h-8.184v43.957h10.954c5.413 0 9.568-2.021 12.464-6.19 3.022-4.294 4.407-9.6 4.407-16.041ZM388.924 751.685c0 13.389-3.273 23.873-9.82 31.2-6.547 7.326-15.99 11.115-28.077 11.115-12.717 0-22.16-3.789-28.707-11.494-6.421-7.705-9.695-17.937-9.695-30.821v-51.661c0-12.884 3.274-23.242 9.695-30.947 6.421-7.705 15.99-11.494 28.707-11.494 12.212 0 21.53 3.663 28.077 11.115 6.547 7.326 9.82 17.81 9.82 31.452v51.535Zm-53.887 3.411c0 6.442 1.51 11.242 4.532 14.147 3.022 3.031 6.799 4.547 11.332 4.547 4.406 0 8.058-1.516 11.079-4.673 3.022-3.158 4.533-7.832 4.533-14.021V696.36c0-6.189-1.511-10.862-4.533-14.02-3.021-3.158-6.798-4.674-11.079-4.674-4.533 0-8.31 1.516-11.332 4.547-3.022 3.032-4.532 7.706-4.532 14.147v58.736Z"
            />
          </svg>
          <div className="w-[835px] h-[500px] md:w-[525px] md:h-[1075px] lg:w-[835px] lg:h-[1265px]">
            <div className="rotate-[100deg] relative w-[800px] left-[-185px] md:w-[1900px] md:left-[-580px] lg:w-[2060px] lg:left-[-550px]">
              <Marquee speed={10} gradient={false} className="mb-8">
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-chicken.png"
                  alt="Sweet Liberty Chicken"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-club.png"
                  alt="Sweet Liberty Club Interior"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-dessert.png"
                  alt="Sweet Liberty Dessert"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-orange.png"
                  alt="Sweet Liberty Orange Juice"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-wine.png"
                  alt="Sweet Liberty Wine"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-ice.png"
                  alt="Sweet Liberty Icecream Soda"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-toy.png"
                  alt="Sweet Liberty Girl Toy"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-burger.png"
                  alt="Sweet Liberty Burger"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
              </Marquee>
              <Marquee speed={10} gradient={false} direction="right">
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-new-orange-juice.png"
                  alt="Sweet Liberty Orange Juice"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-platter.png"
                  alt="Sweet Liberty Platter"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-pina-colada.png"
                  alt="Sweet Liberty Pina Colada"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-chick.png"
                  alt="Sweet Liberty Chick"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-new-orange-juice.png"
                  alt="Sweet Liberty New Orange Juice"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-coffee.png"
                  alt="Sweet Liberty Coffee"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-champagne.png"
                  alt="Sweet Liberty Champagne"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
                <StaticImage
                  src="../../assets/MiamiIsShit/sweet-liberty-red-coffee.png"
                  alt="Sweet Liberty Red Coffee"
                  placeholder="blurred"
                  className="mr-8 h-[138px] w-[175px] md:w-[277px] md:h-[220px] lg:w-[366px] lg:h-[290px]"
                />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MiamiIsShit
