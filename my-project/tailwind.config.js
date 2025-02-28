export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1E293B",
        secondary: "#334155",
        accent: "#6366F1",
        success: "#22C55E",
        pending: "#FACC15",
        danger: "#EF4444",
      },
    },
  },
  plugins: [],
};
