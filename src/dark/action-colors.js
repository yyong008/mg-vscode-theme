import { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import("../types/Toolbar")}
 */
const actionColors = () => ({
  ['toolbar.hoverBackground']: `${mapColors(`${getRuntimeColors()}800`)}`,
  ['toolbar.hoverOutline']: `${mapColors(`${getRuntimeColors()}800`)}`,
  ['toolbar.activeBackground']: `${mapColors(`${getRuntimeColors()}300`)}`
})

export default {
  actionColors
}
