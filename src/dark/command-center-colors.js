import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/CommandCenter').default}
 */
const commandCenterColors = () => ({
  foreground: `${mapColors(`${getRuntimeColors()}100`)}`,
  activeForeground: `${mapColors(`${getRuntimeColors()}500`)}`,
  background: '',
  activeBackground: '',
  border: ''
})

export default {
  commandCenterColors
}
