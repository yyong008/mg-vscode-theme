import colors from '../designs/index.js'

/**
 * @type {import("../types/Toolbar")}
 */
const actionColors = {
  ['toolbar.hoverBackground']: colors.limeColors700,
  ['toolbar.hoverOutline']: colors.limeColors400,
  ['toolbar.activeBackground']: colors.redColors800
}

export default {
  ...actionColors
}
