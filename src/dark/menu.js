import colors from '../designs/index.js'

/**
 * @type {import('../types/Menu').Menu}
 */
const menu = {
  ['menu.background']: '',
  ['menu.foreground']: colors.limeColors300
}

/**
 * @type {import('../types/Menu').MenuBar}
 */
const menuBar = {
  ['menu.selectionForeground']: '',
  ['menu.selectionBackground']: '',
  ['menu.selectionBorder']: ''
}

export default {
  ...menu,
  ...menuBar
}
