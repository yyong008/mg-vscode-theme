import colors from '../designs/index.js'

/**
 * @type {import('../types/Scrollbar').scrollbar}
 */
const scrollbar = {
  ['scrollbar.shadow']: ''
}

/**
 * @type {import('../types/Scrollbar').scrollbarSlider}
 */
const scrollbarSlider = {
  ['scrollbarSlider.activeBackground']: '',
  ['scrollbarSlider.background']: '',
  ['scrollbarSlider.hoverBackground']: ''
}

export default {
  ...scrollbar,
  ...scrollbarSlider
}
