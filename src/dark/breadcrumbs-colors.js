import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import("../types/Breadcrumb").default}
 */
const breadbrumbs = () => ({
  foreground: `${mapColors(`${getRuntimeColors()}400`)}`,
  background: colors.volcanoColors400,
  focusForeground: `${mapColors(`${getRuntimeColors()}400`)}`,
  activeSelectionForeground: ''
})

/**
 * @type {import("../types/Breadcrumb").BreadcrumbPicker}
 */
const breadcrumbPicker = () => ({
  background: `${mapColors(`${getRuntimeColors()}900`)}`
})

export default {
  breadbrumbs,
  breadcrumbPicker
}
