import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/StatusBar.d.ts').StatusBar}
 */
const statusBarColors = () => ({
  [`statusBar.foreground`]: colors.grayColors100,
  [`statusBar.background`]: `${mapColors(`${getRuntimeColors()}900`)}`
})

/**
 * bottom wsl/ssh display position
 * @type {import('../types/StatusBar.d.ts').StatusBarItem}
 */
const statusBarItemColors = () => ({
  [`statusBarItem.activeBackground`]: colors.greenColors400,
  [`statusBarItem.hoverBackground`]: colors.grayColors1000,
  [`statusBarItem.prominentForeground`]: `${mapColors(
    `${getRuntimeColors()}500`
  )}`,
  [`statusBarItem.prominentBackground`]: colors.grayColors100,
  [`statusBarItem.prominentHoverBackground`]: colors.grayColors100,
  [`statusBarItem.remoteBackground`]: `${mapColors(
    `${getRuntimeColors()}700`
  )}`,
  [`statusBarItem.remoteForeground`]: colors.grayColors100,
  [`statusBarItem.errorBackground`]: colors.grayColors100,
  [`statusBarItem.errorForeground`]: colors.grayColors100,
  [`statusBarItem.warningBackground`]: colors.grayColors100,
  [`statusBarItem.warningForeground`]: colors.grayColors100,
  [`statusBarItem.compactHoverBackground`]: colors.grayColors100,
  [`statusBarItem.focusBorder`]: colors.grayColors100
})

export default {
  statusBarColors,
  statusBarItemColors
}
