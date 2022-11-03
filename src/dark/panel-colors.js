import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/Panel').Panel}
 */
const panel = () => ({
  ['panel.background']: colors.grayColors1000,
  ['panel.border']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['panel.dropBorder']: ''
})

/**
 * @type {import('../types/Panel').PanelTitle}
 */
const panelTitle = () => ({
  ['panelTitle.activeForeground']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['panelTitle.activeBorder']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['panelTitle.inactiveForeground']: '#75715E'
})

/**
 * @type {import('../types/Panel').PanelInput}
 */
const panelInput = () => ({
  ['panelInput.border']: ''
})

/**
 * @type {import('../types/Panel').PanelSection}
 */
const panelSection = () => ({
  ['panelSection.border']: '',
  ['panelSection.dropBackground']: ''
})

/**
 * @type {import('../types/Panel').PanelSectionHeader}
 */
const panelSectionHeader = () => ({
  ['panelSectionHeader.background']: '',
  ['panelSectionHeader.foreground']: '',
  ['panelSectionHeader.border']: ''
})

export default {
  panel,
  panelTitle,
  panelInput,
  panelSection,
  panelSectionHeader
}
