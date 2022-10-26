import colors from '../designs/index.js'

/**
 * @type {import('../types/StatusBar.d.ts').StatusBar}
 */
const statusBarColors = {
  [`statusBar.foreground`]: colors.black,
  [`statusBar.background`]: colors.cyanColors900
}

/**
 * 底部 wsl/ssh 显示位置
 * @type {import('../types/StatusBar.d.ts').StatusBarItem}
 */
const statusBarItemColors = {
  [`statusBarItem.activeBackground`]: colors.greenColors400,
  [`statusBarItem.hoverBackground`]: colors.grayColors1000,
  [`statusBarItem.prominentForeground`]: colors.cyanColors500,
  [`statusBarItem.prominentBackground`]: colors.white,
  [`statusBarItem.prominentHoverBackground`]: colors.white,
  [`statusBarItem.remoteBackground`]: colors.white,
  [`statusBarItem.remoteForeground`]: colors.white,
  [`statusBarItem.errorBackground`]: colors.white,
  [`statusBarItem.errorForeground`]: colors.white,
  [`statusBarItem.warningBackground`]: colors.white,
  [`statusBarItem.warningForeground`]: colors.white,
  [`statusBarItem.compactHoverBackground`]: colors.white,
  [`statusBarItem.focusBorder`]: colors.white
}

export default {
  ...statusBarColors,
  ...statusBarItemColors
}
