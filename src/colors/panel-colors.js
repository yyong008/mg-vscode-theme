import panelJson from './json/panel.json'
import panelTitleJson from './json/panelTitle.json'
import panelInputJson from './json/panelInput.json'
import panelSectionJson from './json/panelSection.json'
import panelSectionHeaderJson from './json/panelSectionHeader.json'

export default function panel() {
  return {
    ...panelJson,
    ...panelTitleJson,
    ...panelInputJson,
    ...panelSectionJson,
    ...panelSectionHeaderJson
  }
}
