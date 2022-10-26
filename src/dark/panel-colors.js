import colors from '../designs/index.js'

/**
 * @type {import('../types/Panel').Panel}
 */
const panel = {
  ['panel.background']: colors.grayColors1000,
  ['panel.border']: colors.cyanColors400,
  ['panel.dropBorder']: ''
}

/**
 * @type {import('../types/Panel').PanelTitle}
 */
const panelTitle = {
  ['panelTitle.activeForeground']: colors.cyanColors400,
  ['panelTitle.activeBorder']: colors.cyanColors400,
  ['panelTitle.inactiveForeground']: '#75715E'
}

/**
 * @type {import('../types/Panel').PanelInput}
 */
const panelInput = {
  ['panelInput.border']: ''
}

/**
 * @type {import('../types/Panel').PanelSection}
 */
const panelSection = {
  ['panelSection.border']: '',
  ['panelSection.dropBackground']: ''
}

/**
 * @type {import('../types/Panel').PanelSectionHeader}
 */
const panelSectionHeader = {
  ['panelSectionHeader.background']: '',
  ['panelSectionHeader.foreground']: '',
  ['panelSectionHeader.border']: ''
}

export default {
  ...panel,
  ...panelTitle,
  ...panelInput,
  ...panelSection,
  ...panelSectionHeader
}
