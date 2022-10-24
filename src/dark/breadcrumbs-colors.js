import colors from '../designs/index.js'

/**
 * @type {import("../types/Breadcrumb").default}
 */
const breadbrumbs = {
  foreground: colors.limeColors700,
  background: colors.volcanoColors400,
  focusForeground: colors.limeColors400,
  activeSelectionForeground: ''
}

/**
 * @type {import("../types/Breadcrumb").BreadcrumbPicker}
 */
const breadcrumbPicker = {
  background: colors.cyanColors900
}

export default {
  ...breadbrumbs,
  ...breadcrumbPicker
}
