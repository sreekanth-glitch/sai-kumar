module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { deep: "#0A2540", aqua: "#0FA3B1", brass: "#B8892B", steel: "#E8EEF2", mist: "#F6F9FB" },
      fontFamily: { head: ["var(--font-head)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
    },
  },
  plugins: [],
};
