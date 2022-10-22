import colors from '../designs/index.js'

/**
 * @type {import('../types/StatusBar.js').StatusBar}
 */
const statusBarColors = {
  [`statusBar.foreground`]: colors.black,
  [`statusBar.background`]: colors.greenColors900
}

/**
 * @type {import('../types/StatusBar.js').StatusBarItem}
 */
const statusBarItemColors = {
  [`statusBarItem.activeBackground`]: colors.goldColors900,
  [`statusBarItem.hoverBackground`]: colors.goldColors900,
  [`statusBarItem.activeForeground`]: colors.white
}

export default {
  ...statusBarColors,
  ...statusBarItemColors
}
