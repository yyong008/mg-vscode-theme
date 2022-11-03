import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import("../types/Dropdown").Dropdown}
 */
const dropdown = () => ({
  ['dropdown.listBackground']: colors.grayColors1000,
  ['dropdown.listForeground']: colors.grayColors100,
  ['dropdown.background']: colors.grayColors1200,
  ['dropdown.border']: `${mapColors(`${getRuntimeColors()}400`)}`,
  ['dropdown.foreground']: colors.grayColors300
})

export default { dropdown }
