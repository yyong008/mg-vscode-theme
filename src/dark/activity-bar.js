import colors from '../designs/index.js'

/**
 * @type {import('../types/ActivityBar').ActivityBar;}
 */
const activityBar = {
  ['activityBar.background']: colors.grayColors1000,
  ['activityBar.foreground']: colors.cyanColors400
}

/**
 * @type {import('../types/ActivityBar').ActivityBarBadge}
 */
const activityBarBadge = {
  ['activityBarBadge.background']: colors.volcanoColors600,
  ['activityBarBadge.foreground']: colors.cyanColors400
}

/**
 * @type {import('../types/ActivityBar').ActivityBarItem;}
 */
const activityBarItem = {
  ['activityBarItem.settingsProfilesHoverForeground']: '',
  ['activityBarItem.settingsProfilesBackground']: ''
}
export default { ...activityBar, ...activityBarBadge, ...activityBarItem }
