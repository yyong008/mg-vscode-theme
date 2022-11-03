import colors from '../designs/index.js'

/**
 * @type {import('../types/Scrollbar').Scrollbar}
 */
const sideBar = () => ({
  ['sideBar.background']: colors.grayColors1100,
  ['sideBarSectionHeader.background']: '#272822'
})

/**
 * @type {import('../types/SideBar').SideBarSectionHeader}
 */
const sideBarSectionHeader = () => ({
  ['sideBarSectionHeader.background']: '#272822'
})

export default { sideBar, sideBarSectionHeader }
