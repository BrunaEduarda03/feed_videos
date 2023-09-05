/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,vue,jsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "search-background": "url(/src/assets/ballImage.png)",
      },
      colors: {
        primary: "#590BD8",
        primaryLighter: "#DDD5EA",
        primaryDarker: "#312A4F",
        purpleDark: "#1C1C39",
        grayPrimary: "#717171",
        grayLighter: "#BBBFBF",
        walterWhite: "#F5F5F5",
        redPrimary: "#FE3838",
      },
      textColor: {
        dark: "#717171",
      },
    },
  },
  plugins: [],
};
