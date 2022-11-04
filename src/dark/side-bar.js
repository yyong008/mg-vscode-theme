import colors, { mapColors, getRuntimeColors } from '../designs/index.js'

/**
 * @type {import('../types/Scrollbar').Scrollbar}
 */
const sideBar = () => ({
  ['sideBar.background']: colors.grayColors1000,
  ['sideBar.foreground']: colors.grayColors100,
  ['sideBar.border']: colors.grayColors1000
})

/**
 * @type {import('../types/SideBar').SideBarSectionHeader}
 */
const sideBarSectionHeader = () => ({
  ['sideBarSectionHeader.background']: '#272822'
})

export default { sideBar, sideBarSectionHeader }
