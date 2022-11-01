import colors from '../designs/index.js'

/**
 * @type {import('../types/QuickInput').QuickInputList}
 */
const quickInputList = {
  ['quickInputList.focusBackground']: colors.cyanColors900,
  ['quickInputList.focusForeground']: colors.grayColors100,
  ['quickInputList.focusIconForeground']: colors.cyanColors400,
  ['quickInputList.background']: colors.grayColors1100
}

export default { ...quickInputList }
