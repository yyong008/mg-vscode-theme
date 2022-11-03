import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/BaseColors')}
 */
const baseColors = () => ({
  focusBorder: `${mapColors(`${getRuntimeColors()}400`)}`,
  foreground: colors.grayColors100,
  disabledForeground: colors.grayColors800,
  descriptionForeground: `${mapColors(`${getRuntimeColors()}400`)}`,
  errorForeground: colors.redColors600
})

export default { baseColors }
