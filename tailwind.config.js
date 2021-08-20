module.exports = {
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
      fontSize: {
        xxs: "5px",
      },
      boxShadow: {
        "blog-card":
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "drop-down": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        "blog-card": "420px",
      },
      minHeight: {
        "blog-card": "206px",
      },
    },
  },
  variants: {
    extend: {
      tranform: ["group-tranform"],
    },
  },
  plugins: [],
}
