const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Roboto\\ Serif",
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
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            h2: {
              fontWeight: "font-light",
              color: theme("colors.gray.800"),
            },
            h3: {
              fontWeight: "font-light",
              color: theme("colors.gray.800"),
            },
            strong: {
              color: theme("colors.gray.800"),
            },
            a: {
              color: theme("colors.green.500"),
              "&:hover": {
                color: theme("colors.green.600"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
