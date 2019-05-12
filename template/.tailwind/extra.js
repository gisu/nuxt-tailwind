/*
 * Tailwind Extra Utilities
 *
 */

module.exports = function (options) {
  return function ({ addUtilities, e, config }) {
    // Place for custom utilities and components
    const newUtilities = {
      '.cmt-20p + .cmt-20p': {
        marginTop: '20px'
      },
      '.cmt-10p + .cmt-10p': {
        marginTop: '10px'
      },
      '.cmt-5p + .cmt-5p': {
        marginTop: '5px'
      },
      '.mb-ri': {
        marginBottom: '0 !important'
      },
      '.textshadow-soft': {
        textShadow: '0 0 30px rgba(0, 0, 0, .3)'
      },
      '.position-below': {
        bottom: '0',
        transform: 'translateY(100%)'
      },
      '.pin-vert-center': {
        top: '50%',
        transform: 'translateY(-50%)'
      },
      '.format-square': {
        height: '0',
        paddingTop: '100%'
      },
      '.hyphens': {
        hyphens: 'auto',
        hyphenatLimitChars: '6 3 2'
      },
      '.no-hyphens': {
        hyphens: 'manual'
      }
    }
    addUtilities(newUtilities)
  }
}
