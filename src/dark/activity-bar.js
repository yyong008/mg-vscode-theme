import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/ActivityBar').ActivityBar;}
 */
const activityBar = () => ({
  ['activityBar.background']: colors.grayColors1000,
  ['activityBar.foreground']: `${mapColors(`${getRuntimeColors()}800`)}`
})

/**
 * @type {import('../types/ActivityBar').ActivityBarBadge}
 */
const activityBarBadge = () => ({
  ['activityBarBadge.background']: colors.volcanoColors600,
  ['activityBarBadge.foreground']: `${mapColors(`${getRuntimeColors()}400`)}`
})

/**
 * @type {import('../types/ActivityBar').ActivityBarItem;}
 */
const activityBarItem = () => ({
  ['activityBarItem.settingsProfilesHoverForeground']: '',
  ['activityBarItem.settingsProfilesBackground']: ''
})

export default { activityBar, activityBarBadge, activityBarItem }
