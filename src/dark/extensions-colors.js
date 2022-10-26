import colors from '../designs/index.js'

/**
 * @type {import('../types/Extension').ExtensionButton}
 */
const extensionButton = {
  ['extensionButton.prominentForeground']: colors.cyanColors900,
  ['extensionButton.prominentBackground']: colors.cyanColors400,
  ['extensionButton.prominentHoverBackground']: ''
}

/**
 * @type {import('../types/Extension').ExtensionBadge}
 */
const extensionBadge = {
  ['extensionBadge.remoteBackground']: '',
  ['extensionBadge.remoteForeground']: ''
}

/**
 * @type {import('../types/Extension').ExtensionIcon}
 */
const extensionIcon = {
  ['extensionIcon.starForeground']: '',
  ['extensionIcon.verifiedForeground']: '',
  ['extensionIcon.preReleaseForeground']: '',
  ['extensionIcon.sponsorForeground']: ''
}

export default {
  ...extensionButton,
  ...extensionBadge,
  ...extensionIcon
}
