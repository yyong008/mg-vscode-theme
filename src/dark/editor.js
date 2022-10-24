import colors from '../designs/index.js'

/**
 * @type {import('../types/Editor').default}
 */
const editor = {
  ['editor.background']: colors.grayColors1100,
  ['editor.foreground']: colors.limeColors400,
  ['editor.selectionHighlightBackground']: '#575b6180',
  ['editor.selectionBackground']: '#878b9180',
  ['editor.wordHighlightBackground']: '#4a4a7680',
  ['editor.wordHighlightStrongBackground']: '#6a6a9680',
  ['editor.lineHighlightBackground']: '#3e3d32'
}

/**
 * @type {import('../types/Editor').EditorCursor}
 */
const editorCursor = {
  ['editorCursor.foreground']: '#f8f8f0'
}

/**
 * @type {import('../types/Editor').EditorWhitespace}
 */
const editorWhitespace = {
  ['editorWhitespace.foreground']: '#464741'
}

/**
 * @type {import('../types/Editor').EditorIndentGuide}
 */
const editorIndentGuide = {
  ['editorIndentGuide.background']: '#464741',
  ['editorIndentGuide.activeBackground']: '#767771'
}

/**
 * @type {import('../types/Editor').EditorGroup}
 */
const editorGroupColors = {
  ['editorGroup.border']: colors.limeColors400,
  ['editorGroup.dropBackground']: '#41433980'
}

/**
 * @type {import('../types/Editor').EditorGroupHeader}
 */
const editorGroupHeaderColors = {
  ['editorGroupHeader.tabsBackground']: '#1e1f1c'
}

/**
 * @type {import('../types/Editor').EditorWidget}
 */
const editorWidget = {
  ['editorWidget.background']: colors.grayColors1100
}

/**
 * @type {import('../types/Editor').EditorHoverWidget}
 */
const editorHoverWidget = {
  ['editorHoverWidget.background']: colors.grayColors1000,
  ['editorHoverWidget.border']: '#75715E'
}

/**
 * @type {import('../types/Editor').EditorSuggestWidget}
 */
const editorSuggestWidget = {
  ['editorSuggestWidget.background']: '#272822',
  ['editorSuggestWidget.border']: '#75715E'
}

/**
 * @type {import('../types/Editor').EditorLineNumber}
 */
const editorLineNumber = {
  ['editorLineNumber.foreground']: '#90908a',
  ['editorLineNumber.activeForeground']: '#c2c2bf'
}

/**
 * @type {import('../types/Editor').EditorDebug}
 */
export const editorDebug = {
  ['editor.stackFrameHighlightBackground']: '',
  ['editor.inlineValuesForeground']: '',
  ['editor.inlineValuesBackground']: ''
}

/**
 * @type {import('../types/Editor').EditorCommentsWidget}
 */
const editorCommentsWidget = {
  ['editorCommentsWidget.resolvedBorder']: '',
  ['editorCommentsWidget.unresolvedBorder']: '',
  ['editorCommentsWidget.rangeBackground']: '',
  ['editorCommentsWidget.rangeBorder']: '',
  ['editorCommentsWidget.rangeActiveBackground']: '',
  ['editorCommentsWidget.rangeActiveBorder']: ''
}

export default {
  ...editor,
  ...editorCursor,
  ...editorWhitespace,
  ...editorIndentGuide,
  ...editorGroupColors,
  ...editorGroupHeaderColors,
  ...editorWidget,
  ...editorHoverWidget,
  ...editorSuggestWidget,
  ...editorLineNumber,
  ...editorCommentsWidget
}
