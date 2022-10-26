import colors from '../designs/index.js'

/**
 * @type {import("../types/Breadcrumb").default}
 */
const breadbrumbs = {
  foreground: colors.cyanColors700,
  background: colors.volcanoColors400,
  focusForeground: colors.cyanColors400,
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
