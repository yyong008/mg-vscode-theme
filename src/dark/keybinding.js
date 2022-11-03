import colors from '../designs/index.js'

/**
 * @type {import('../types/Keybinding').KeybindingLabel}
 */
const keybindingLabel = () => ({
  ['keybindingLabel.background']: '',
  ['keybindingLabel.foreground']: '',
  ['keybindingLabel.border']: '',
  ['keybindingLabel.bottomBorder']: ''
})

/**
 * @type {import('../types/Keybinding').keybindingTable}
 */
const keybindingTable = () => ({
  ['keybindingTable.headerBackground']: colors.redColors500,
  ['keybindingTable.rowsBackground']: ''
})

export default {
  keybindingLabel,
  keybindingTable
}
