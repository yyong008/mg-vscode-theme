import colors from '../designs/index.js'

/**
 * @type {import('../types/Settings').default}
 */
const settingEditor = () => ({
  ['setting.headerForeground']: colors.grayColors100,
  ['setting.modifiedItemIndicator']: '',
  ['setting.dropdownBackground']: '',
  ['setting.dropdownForeground']: '',
  ['setting.dropdownBorder']: colors.blueColors600,
  ['setting.dropdownListBorder']: '',
  ['setting.checkboxBackground']: '',
  ['setting.checkboxForeground']: '',
  ['setting.checkboxBorder']: '',
  ['setting.rowHoverBackground']: '',
  ['setting.textInputBackground']: '',
  ['setting.textInputForeground']: '',
  ['setting.textInputBorder']: '',
  ['setting.numberInputBackground']: '',
  ['setting.numberInputForeground']: '',
  ['setting.numberInputBorder']: '',
  ['setting.focusedRowBackground']: '',
  ['setting.focusedRowBorder']: '',
  ['setting.headerBorder']: '',
  ['setting.sashBorder']: ''
})

export default {
  settingEditor
}
