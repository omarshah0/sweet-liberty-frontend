module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandLight: "#C0F3D4",
        brandDark: "#257972",
        brandRed: "#C1272D",
        brandPink: "#EF5DA8",
        shopBg: "#DCFFEA",
        socialLink: "#7CAEA8",
        brunch: "#F3F4F6",
        happyHour: "#111827",
        brandGrey: "#E5E7EB",
        brandGold: "#CD853F",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        redHatDisplay: ["Red Hat Display", "sans-serif"],
        frankRuhlLibre: ["Frank Ruhl Libre", "serif"],
        sourceSansProBold: ["Source Sans Pro", "sans-serif"],
        cantataOne: ["Cantata One", "serif"],
      },
      spacing: {
        100: "30rem",
      },
      margin: {
        hero: "33.5rem",
      },
      fontSize: {
        xxs: "5px",
        med: "16px",
        resky: "10px",
        hero: "180px",
        banner: "190px",
        pursue: "116px",
        heavy: "509px",
        merch: "200px",
        booking: "150px",
        "heavy-comp": "158px",
      },
      lineHeight: {
        hero: "0.8",
      },
      boxShadow: {
        "blog-card":
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "drop-down": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "product-card": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        "blog-card": "420px",
        1440: "1440px",
      },
      height: {
        standard: "962px",
      },
      minHeight: {
        "blog-card": "206px",
      },
      translate: {
        hero: "79%",
      },
      keyframes: {
        heroFadeIn: {
          "0%": { tranform: "translateX(-100vw)" },
          "100%": { tranform: "translateX(0vw)" },
        },
        awardsFadeIn: {
          "0%": { tranform: "translateY(200px)" },
          "100%": { tranform: "translateY(0px)" },
        },
      },
      animation: {
        fadeIn: "heroFadeIn 1.5s ease-in-out",
        awardsFadeIn: "awardsFadeIn 1s infinite",
      },
      screens: {
        "sm-max": { max: "640px" },
      },
    },
  },
  variants: {
    extend: {
      tranform: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
}
