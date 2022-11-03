import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/Banner')}
 */
const banner = () => ({
  background: colors.redColors400,
  foreground: `${mapColors(`${getRuntimeColors()}400`)}`,
  iconForeground: colors.redColors500
})

export default { banner }
