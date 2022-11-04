import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/Badge');}
 */
const badge = () => ({
  ['badge.background']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['badge.foreground']: colors.grayColors100
})

export default { badge }
