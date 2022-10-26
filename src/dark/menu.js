import colors from '../designs/index.js'

/**
 * @type {import('../types/Menu').Menu}
 */
const menu = {
  ['menu.background']: colors.grayColors1000,
  ['menu.foreground']: colors.grayColors400
}

/**
 * @type {import('../types/Menu').MenuBar}
 */
const menuBar = {
  ['menu.selectionForeground']: '',
  ['menu.selectionBackground']: colors.grayColors800,
  ['menu.selectionBorder']: ''
}

export default {
  ...menu,
  ...menuBar
}
