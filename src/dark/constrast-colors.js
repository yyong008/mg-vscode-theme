import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/ContrastColors').ContrastColors}
 */
const ContrastColors = () => ({
  contrastActiveBorder: `${mapColors(`${getRuntimeColors()}1000`)}`,
  contrastBorder: ''
})

export default {
  ContrastColors
}
