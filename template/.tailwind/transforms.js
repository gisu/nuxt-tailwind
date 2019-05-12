/*
 * Tailwind Extra Utilities
 *
 */

module.exports = function (options) {
  return function ({ addUtilities, e, config }) {
    // Place for custom utilities and components
    const transforms = {
      '.rotate-0': {
        transform: 'rotate(0)'
      },
      '.rotate-90': {
        transform: 'rotate(90)'
      },
      '.rotate-180': {
        transform: 'rotate(180)'
      },
      '.rotate-270': {
        transform: 'rotate(270)'
      },
    }
    addUtilities(transforms, {
      variants: ['responsive', 'hover']
    })
  }
}
