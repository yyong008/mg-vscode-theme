import mergeJson from './json/merge.json'
import editorOverviewRulerJson from './json/editorOverviewRuler.json'
import mergeEditorJson from './json/mergeEditor.json'

export default function merge() {
  return {
    ...mergeJson,
    ...editorOverviewRulerJson,
    ...mergeEditorJson
  }
}
