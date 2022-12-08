const { RecoilBridge } = require("recoil");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        SCDream1: ["SCDream1"],
        SCDream2: ["SCDream2"],
        SCDream3: ["SCDream3"],
        SCDream4: ["SCDream4"],
        SCDream5: ["SCDream5"],
        SCDream6: ["SCDream6"],
        SCDream7: ["SCDream7"],
        SCDream8: ["SCDream8"],
        SCDream9: ["SCDream9"],
      },
      colors: {
        topbtn: "rgb(5,5,5, 0.37)",
        lightOrange: "rgb(235 ,130 ,83 ,0.3)",
        mainOrange: "#EB8253",
        btnOrange: "#FF9264",
        textBlack: "rgba(0,0,0, 0.5)",
        underbar: "rgb(255, 174, 140)",
        bgGray: "#F8F9FD",
        bgWhite: "#FEFEFE",
        socialBgGray: "rgba(220,220,220,0.43)",
        socialBgOrg: "rgba(250, 139, 92,0.72)",
        nagativeMessage: "#ff0000",
        textGray: "#494949",
        noticeRed: "rgba(216, 76, 52, 0.86)",
        coral: "#FFC0AC",
      },
      screens: {
        md: "376px",
      },
      display: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
