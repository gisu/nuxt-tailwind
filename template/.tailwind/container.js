/*
 * Tailwind Custom Component: container
 * ------------------------------------
 * Fluid Container
 */

module.exports = function () {
  return function ({ addComponents }) {
    addComponents({
      '.container': {
        width: '100%',
        minWidth: '340px',
        maxWidth: '1200px'
      }
    })
  }
}
