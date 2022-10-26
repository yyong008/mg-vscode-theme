import colors from '../designs/index.js'

/**
 * @type {import("../types/Toolbar")}
 */
const actionColors = {
  ['toolbar.hoverBackground']: colors.cyanColors800,
  ['toolbar.hoverOutline']: colors.cyanColors800,
  ['toolbar.activeBackground']: colors.redColors300
}

export default {
  ...actionColors
}
