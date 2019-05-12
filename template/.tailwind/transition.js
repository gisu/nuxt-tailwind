/*
 * Tailwind Custom Component transition
 *
 */

module.exports = function (options) {
  return function ({ addComponents }) {
    addComponents({
      '.transition-default': {
        transition: 'all .3s ease-in'
      },
      '.transition-color': {
        transition: 'color .3s ease-in'
      },
      '.transition-opacity': {
        transition: 'opacity .3s ease-in'
      },
      '.transition': {
        transitionDuration: '.3s'
      },
      '.transition-slow': {
        transitionDuration: '.75s'
      },
      '.transition-fast': {
        transitionDuration: '.15s'
      },
      '.tansition-prop-width': {
        transitionProperty: 'width'
      },
      '.transition-prop-all': {
        transitionProperty: 'all'
      },
      '.transition-prop-height': {
        transitionProperty: 'height'
      },
      '.transition-prop-opacity': {
        transitionProperty: 'opacity'
      },
      '.transition-prop-border': {
        transitionProperty: 'border'
      },
      '.transition-time-linear': {
        transitionTimingFunction: 'linear'
      },
      '.transition-time-easein': {
        transitionTimingFunction: 'ease-in'
      },
      '.transition-time-easeout': {
        transitionTimingFunction: 'ease-out'
      },
      '.transition-time-easeinout': {
        transitionTimingFunction: 'ease-in-out'
      }
    })
  }
}
