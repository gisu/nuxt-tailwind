/*
 * Tailwind Extra Utilities
 *
 */

module.exports = function (options) {
  return function ({ addUtilities, e, config }) {
    // Place for custom utilities and components
    const transforms = {
      '.ar-square': {
        paddingTop: '100%'
      },
      '.ar-16-9': {
        paddingTop: '56.2%'
      },
      '.ar-21-9': {
        paddingTop: '42.8%'
      },
      '.ar-4-3': {
        paddingTop: '75%'
      },
    }
    addUtilities(transforms, {
      variants: ['responsive', 'hover']
    })
  }
}
