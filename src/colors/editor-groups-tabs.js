import editorGroupJson from './json/editorGroup.json'
import editorGroupHeaderJson from './json/editorGroupHeader.json'
import tabJson from './json/tab.json'
import editorPanel from './json/editorPane.json'
import sideBySideEditor from './json/sideBySideEditor.json'

export default function editorGroupsAndTabs() {
  return {
    ...editorGroupJson,
    ...editorGroupHeaderJson,
    ...tabJson,
    ...editorPanel,
    ...sideBySideEditor
  }
}
