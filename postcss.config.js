// postcss.config.js

module.exports = {
  plugins: {
    "postcss-nested": {}, // Add postcss-nested before tailwindcss
    tailwindcss: {},
    autoprefixer: {},
  },
};
