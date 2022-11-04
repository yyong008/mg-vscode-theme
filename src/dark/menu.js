import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/Menu').Menu}
 */
const menu = () => ({
  ['menu.background']: colors.grayColors1100,
  ['menu.foreground']: colors.grayColors100,
  ['menu.selectionForeground']: colors.grayColors100,
  ['menu.selectionBackground']: `${mapColors(`${getRuntimeColors()}800`)}`,
  ['menu.selectionBorder']: '',
  ['menu.separatorBackground']: '',
  ['menu.border']: ''
})

/**
 * @type {import('../types/Menu').MenuBar}
 */
const menuBar = () => ({
  ['menubar.selectionForeground']: '',
  ['menubar.selectionBackground']: '',
  ['menubar.selectionBorder']: ''
})

export default {
  menu,
  menuBar
}
