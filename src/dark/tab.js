import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/Tab').default}
 */
const tab = () => ({
  ['tab.activeBackground']: colors.grayColors1100,
  ['tab.unfocusedActiveBackground']: '',
  ['tab.inactiveBackground']: colors.grayColors900,
  ['tab.border']: colors.grayColors900,
  ['tab.inactiveForeground']: colors.grayColors600,
  ['tab.activeForeground']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['tab.lastPinnedBorder']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['tab.activeBorder']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['tab.unfocusedActiveBorder']: '',
  ['tab.activeBorderTop']: '',
  ['tab.unfocusedActiveBorderTop']: '',
  ['tab.unfocusedInactiveBackground']: '',
  ['tab.unfocusedActiveForeground']: '',
  ['tab.unfocusedInactiveForeground']: '',
  ['tab.hoverBackground']: colors.grayColors1000,
  ['tab.unfocusedHoverBackground']: '',
  ['tab.hoverForeground']: '',
  ['tab.unfocusedHoverForeground']: '',
  ['tab.hoverBorder']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['tab.unfocusedHoverBorder']: '',
  ['tab.activeModifiedBorder']: '',
  ['tab.inactiveModifiedBorder']: '',
  ['tab.unfocusedActiveModifiedBorder']: '',
  ['tab.unfocusedInactiveModifiedBorder']: ''
})

export default { tab }
