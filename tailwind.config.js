const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Work\\ Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe\\ UI",
        "Roboto",
        "Oxygen-Sans",
        "Ubuntu",
        "Cantarell",
        "Helvetica\\ Neue",
        "sans-serif",
      ],
      mono: ["Space Mono", "IBM Plex Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
