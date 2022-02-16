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
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      addBase({
        html: {
          letterSpacing: theme("letterSpacing.tighter"), // Increase tracking for Work Sans
        },
        h1: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: theme("fontSize.xl"),
        },
        p: {
          fontSize: theme("fontSize.lg"),
        },
        small: {
          fontSize: theme("fontSize.sm"),
        },
        time: {
          fontSize: theme("fontSize.sm"),
        },
      });
    }),
  ],
};
