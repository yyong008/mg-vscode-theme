import diffEditorJson from './json/diffEditor.json'
import diffEditorGutter from './json/diffEditorGutter.json'
import diffEditorOverview from './json/diffEditorOverview.json'

export default function diffEditor() {
  return {
    ...diffEditorJson,
    ...diffEditorGutter,
    ...diffEditorOverview
  }
}
