import debugToolBarJson from './json/debugToolBar.json'
import editorJson from './json/editor.json'
import debugViewJson from './json/debugView.json'
import debugTokenExpressionJson from './json/debugTokenExpression.json'

export default function debugColors() {
  const {
    stackFrameHighlightBackground,
    focusedStackFrameHighlightBackground,
    inlineValuesForeground,
    inlineValuesBackground
  } = editorJson
  const {
    exceptionLabelForeground,
    exceptionLabelBackground,
    stateLabelForeground,
    stateLabelBackground,
    valueChangedHighlight
  } = debugViewJson

  const { name, value, string, boolean, number, error } =
    debugTokenExpressionJson

  // part prop
  return {
    ...debugToolBarJson,
    editor: {
      stackFrameHighlightBackground,
      focusedStackFrameHighlightBackground,
      inlineValuesForeground,
      inlineValuesBackground
    },
    debugView: {
      exceptionLabelForeground,
      exceptionLabelBackground,
      stateLabelForeground,
      stateLabelBackground,
      valueChangedHighlight
    },
    debugTokenExpression: {
      name,
      value,
      string,
      boolean,
      number,
      error
    }
  }
}
