import colors from '../designs/index.js'

/**
 * @type {import('../types/Minimap').Minimap}
 */
const minimap = () => ({
  ['minimap.selectionHighlight']: '#878b9180'
})

/**
 * @type {import('../types/Minimap').minimapSlider}
 */
const minimapSlider = () => ({
  ['minimapSlider.background']: '',
  ['minimapSlider.hoverBackground']: '',
  ['minimapSlider.activeBackground']: ''
})

/**
 * @type {import('../types/Minimap').MinimapGutter}
 */
const minimapGutter = () => ({
  ['minimapGutter.addedBackground']: '',
  ['minimapGutter.modifiedBackground']: '',
  ['minimapGutter.deletedBackground']: ''
})

export default { minimap, minimapSlider, minimapGutter }
