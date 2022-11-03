import { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/Button').default}
 */
const button = () => ({
  ['button.background']: `${mapColors(`${getRuntimeColors()}700`)}`,
  ['foreground']: '',
  ['border']: '',
  ['separator']: '',
  ['hoverBackground']: '',
  ['secondaryForeground']: '',
  ['secondaryBackground']: '',
  ['secondaryHoverBackground']: ''
})

export default {
  button
}
