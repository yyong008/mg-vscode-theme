import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/window.js').default}
 */
const window = () => ({
  ['window.activeBorder']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['window.inactiveBorder']: `${mapColors(`${getRuntimeColors()}400`)}`
})

export default { window }
