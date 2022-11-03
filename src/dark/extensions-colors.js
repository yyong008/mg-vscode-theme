import { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/Extension').ExtensionButton}
 */
const extensionButton = () => ({
  ['extensionButton.prominentForeground']: `${mapColors(
    `${getRuntimeColors()}900`
  )}`,
  ['extensionButton.prominentBackground']: `${mapColors(
    `${getRuntimeColors()}400`
  )}`,
  ['extensionButton.prominentHoverBackground']: ''
})

/**
 * @type {import('../types/Extension').ExtensionBadge}
 */
const extensionBadge = () => ({
  ['extensionBadge.remoteBackground']: '',
  ['extensionBadge.remoteForeground']: ''
})

/**
 * @type {import('../types/Extension').ExtensionIcon}
 */
const extensionIcon = () => ({
  ['extensionIcon.starForeground']: '',
  ['extensionIcon.verifiedForeground']: '',
  ['extensionIcon.preReleaseForeground']: '',
  ['extensionIcon.sponsorForeground']: ''
})

export default {
  extensionButton,
  extensionBadge,
  extensionIcon
}
