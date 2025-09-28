/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        rialo: {
          paper: "#F5F3EE", // abu-abu krem utama
          ember1: "#C74F16", // bagian atas strip ember
          ember2: "#6A2A17"  // bagian bawah strip ember
        },
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.10)" },
      borderRadius: { xl3: "28px" },
    },
  },
  plugins: [],
};
