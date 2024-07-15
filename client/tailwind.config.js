/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
<<<<<<< HEAD
        red: {
          utility: "#AF2758",
          100: "#FFE1EA",
          200: "#FFB1C8",
          300: "#FF6390",
          400: "#FF1659",
          500: "#C70039",
          600: "#95002B",
          700: "#64001D",
          800: "#32000E",
          900: "#200009",
        },
        gray: {
          100: "#F6F7FC",
          200: "#F1F2F6",
          300: "#E4E6ED",
          400: "#D6D9E4",
          500: "#C8CCDB",
          600: "#9AA1B9",
          700: "#646D89",
          800: "#424C6B",
          900: "#2A2E3F",
        },
        purple: {
          100: "#F4EBF2",
          200: "#EFC4E2",
          300: "#DF89C6",
          400: "#CF4FA9",
          500: "#A62D82",
          600: "#7D2262",
          700: "#531741",
          800: "#411032",
          900: "#2A0B21",
        },
        beige: {
          100: "#FAF1ED",
          200: "#F3E4DD",
          300: "#E8CABB",
          400: "#DCAF99",
          500: "#D19477",
          600: "#B8653E",
          700: "#7B4429",
          800: "#612F16",
          900: "#3D2215",
        },
        yellow: {
          100: "#FFF6D4",
          500: "#393735",
        },
        white: "#FFFFFF",
        black: "#000000",
=======
>>>>>>> 84ae46f (feat: add feature in admin page)
        "color-red-utility": "#AF2758",
        "color-red-100": "#FFE1EA",
        "color-red-500": "#C70039",
        "color-red-600": "#95002B",
        "color-gray-200": "#F1F2F6",
        "color-gray-600": "#9AA1B9",
        "color-gray-400": "#D6D9E4",
        "color-gray-700": "#646D89",
        "color-gray-800": "#424C6B",
        "color-gray-900": "#2A2E3F",
        "color-purple-100": "#F4EBF2",
        "color-purple-500": "#A62D82",
        "color-purple-600": "#7D2262",
        "color-beige-700": "#7B4429",
      },
      dropShadow: {
        primary: "2px 2px 12px rgba(64, 50, 133, 0.16)",
        secondary: "2px 2px 12px rgba(64, 50, 133, 0.08)",
      },
      boxShadow: {
        primary: "2px 2px 12px 0px rgba(64, 50, 133, 0.12)",
      },
<<<<<<< HEAD
      backgroundImage: {
        customGradient:
          "radial-gradient(106.64% 594.8% at 3.13% 0%, #742138 23.43%, #A878BF 100%)",
      },
      backgroundColor: {
        main: "#FCFCFE",
        dark: "#160404",
=======
=======
        "color-red-utility": "#AF2758",
        "color-gray-200": "#F1F2F6",
>>>>>>> 1f93ac5 (feat,style: add upload image section)
        "color-gray-400": "#D6D9E4",
        "color-gray-700": "#646D89",
        "color-gray-800": "#424C6B",
        "color-gray-900": "#2A2E3F",
<<<<<<< HEAD
>>>>>>> 6ee509c (style: add tailwind style on input of user profile form)
=======
        "color-purple-100": "#F4EBF2",
        "color-purple-500": "#A62D82",
        "color-purple-600": "#7D2262",
        "color-beige-700": "#7B4429",
>>>>>>> 1f93ac5 (feat,style: add upload image section)
      },
=======
<<<<<<< HEAD
>>>>>>> 84ae46f (feat: add feature in admin page)
=======
>>>>>>> 4c606ff (feat: delete pop up)
>>>>>>> 39de4b3 (feat: delete pop up)
    },
  },
  plugins: [require("daisyui")],
};