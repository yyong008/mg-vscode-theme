import peekViewJson from './json/peekView.json'
import peekViewEditorJson from './json/peekViewEditor.json'
import peekViewEditorGutterJson from './json/peekViewEditorGutter.json'
import peekViewResultJson from './json/peekViewResult.json'
import peekViewTitleJson from './json/peekViewTitle.json'
import peekViewTitleDescriptionJson from './json/peekViewTitleDescription.json'
import peekViewTitleLabelJson from './json/peekViewTitleLabel.json'

export default function peekView() {
  return {
    ...peekViewJson,
    ...peekViewEditorJson,
    ...peekViewEditorGutterJson,
    ...peekViewResultJson,
    ...peekViewTitleJson,
    ...peekViewTitleDescriptionJson,
    ...peekViewTitleLabelJson
  }
}
