import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/QuickInput').QuickInputList}
 */
const quickInputList = () => ({
  ['quickInputList.focusBackground']: `${mapColors(
    `${getRuntimeColors()}900`
  )}`,
  ['quickInputList.focusForeground']: colors.grayColors100,
  ['quickInputList.focusIconForeground']: `${mapColors(
    `${getRuntimeColors()}400`
  )}`,
  ['quickInputList.background']: colors.grayColors1100
})

export default { quickInputList }
