import sideBarJson from './json/sideBar.json'
import sideBarTitleJson from './json/sideBarTitle.json'
import sideBarSectionHeaderJson from './json/sideBarSectionHeader.json'

export default function sideBar() {
  return {
    ...sideBarJson,
    ...sideBarTitleJson,
    ...sideBarSectionHeaderJson
  }
}
