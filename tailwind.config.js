/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
        
      },
      keyframes: {
        "horizontal-scroll": {
          '0%': { transform: "translateX(0%)" },
          '100%': { transform: "translateX(-100%)" },
        },
        "horizontal-scroll-2": {
          '0%': { transform: "translateX(100%)" },
          '100%': { transform: "translateX(0%)" },
        },
      },
      animation: {
        "horizontal-scroll": "horizontal-scroll 40s linear infinite",
        "horizontal-scroll-2": "horizontal-scroll-2 40s linear infinite",
      },
    },
  },
  plugins: [],
};
