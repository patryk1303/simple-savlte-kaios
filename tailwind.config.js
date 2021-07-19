const production = !process.env.ROLLUP_WATCH

module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",
      "./public/index.html",
    ],
    safelist: [
      'bg-white',
      'bg-purple-400',
      'text-black',
      'text-gray-700',
      'text-white'
    ],
    enabled: production // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
