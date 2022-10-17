import editorJson from './json/editor.json'
import editorLineNumber from './json/editorLineNumber.json'
import editorCursor from './json/editorCursor.json'
import searchEditor from './json/searchEditor.json'
import editorUnicodeHighlight from './json/editorUnicodeHighlight.json'
import editorLink from './json/editorLink.json'
import editorWhitespace from './json/editorWhitespace.json'
import editorIndentGuide from './json/editorIndentGuide.json'
import editorInlayHint from './json/editorInlayHint.json'
import editorRuler from './json/editorRuler.json'
import editorCodeLens from './json/editorCodeLens.json'
import editorLightBulb from './json/editorLightBulb.json'
import editorLightBulbAutoFix from './json/editorLightBulbAutoFix.json'
import editorBracketMatch from './json/editorBracketMatch.json'
import editorBracketHighlight from './json/editorBracketHighlight.json'
import editorBracketPairGuide from './json/editorBracketPairGuide.json'
import editorOverviewRuler from './json/editorOverviewRuler.json'
import editorError from './json/editorError.json'
import editorWarning from './json/editorWarning.json'
import editorInfo from './json/editorInfo.json'
import editorHint from './json/editorHint.json'
import problemsErrorIcon from './json/problemsErrorIcon.json'
import problemsWarningIcon from './json/problemsWarningIcon.json'
import problemsInfoIcon from './json/problemsInfoIcon.json'
import editorUnnecessaryCode from './json/editorUnnecessaryCode.json'
import editorGutter from './json/editorGutter.json'
import editorCommentsWidget from './json/editorCommentsWidget.json'

export default function editorColors() {
  return {
    ...editorJson,
    ...editorLineNumber,
    ...editorCursor,
    ...searchEditor,
    ...editorUnicodeHighlight,
    ...editorLink,
    ...editorWhitespace,
    ...editorIndentGuide,
    ...editorInlayHint,
    ...editorRuler,
    ...editorCodeLens,
    ...editorLightBulb,
    ...editorLightBulbAutoFix,
    ...editorBracketMatch,
    ...editorBracketHighlight,
    ...editorBracketPairGuide,
    ...editorOverviewRuler,
    ...editorError,
    ...editorWarning,
    ...editorInfo,
    ...editorHint,
    ...problemsErrorIcon,
    ...problemsWarningIcon,
    ...problemsInfoIcon,
    ...editorUnnecessaryCode,
    ...editorGutter,
    ...editorCommentsWidget
  }
}
