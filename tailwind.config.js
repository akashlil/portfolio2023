/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // animation: {
      //   wiggle: "wiggle 1s ease-in-out infinite",
      // },
      // keyframes: {
      //   wiggle: {
      //     "0%,100%": {
      //       transform: "rotate(-30deg)",
      //     },
      //     "50%": { transform: "rotate(3deg)" },
      //   },
      // },
      backgroundImage: {
        banner: "url('/public/banner.png')",
        footer:
          "url('bg-[url('https://web.programming-hero.com/static/media/footerbg.10d6ca49.jpg')]')",
      },
    },
  },
  plugins: [],
};
