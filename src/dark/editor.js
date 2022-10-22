import colors from '../designs/index.js'

const editor = {
  ['editor.background']: colors.grayColors1100,
  ['editor.foreground']: colors.limeColors400,
  ['editor.selectionHighlightBackground']: '#575b6180',
  ['editor.selectionBackground']: '#878b9180',
  ['editor.wordHighlightBackground']: '#4a4a7680',
  ['editor.wordHighlightStrongBackground']: '#6a6a9680',
  ['editor.lineHighlightBackground']: '#3e3d32'
}

const editorCursor = {
  ['editorCursor.foreground']: '#f8f8f0'
}

const editorWhitespace = {
  ['editorWhitespace.foreground']: '#464741'
}

const editorIndentGuide = {
  ['editorIndentGuide.background']: '#464741',
  ['editorIndentGuide.activeBackground']: '#767771'
}

const editorGroupColors = {
  ['editorGroup.border']: colors.redColors500,
  ['editorGroupHeader.tabsBackground']: '#1e1f1c',
  ['editorGroup.dropBackground']: '#41433980'
}

const editorWidget = {
  ['editorWidget.background']: colors.red
}
const editorHoverWidget = {
  ['editorHoverWidget.background']: colors.grayColors1000,
  ['editorHoverWidget.border']: '#75715E'
}

const editorSuggestWidget = {
  ['editorSuggestWidget.background']: '#272822',
  ['editorSuggestWidget.border']: '#75715E'
}

const editorLineNumber = {
  ['editorLineNumber.foreground']: '#90908a',
  ['editorLineNumber.activeForeground']: '#c2c2bf'
}

// debug
export const editorDebug = {
  ['editor.stackFrameHighlightBackground']: '',
  ['editor.focusedStackFrameHighlightBackground']: '',
  ['editor.inlineValuesForeground']: '',
  ['editor.inlineValuesBackground']: ''
}

export default {
  ...editor,
  ...editorCursor,
  ...editorWhitespace,
  ...editorIndentGuide,
  ...editorGroupColors,
  ...editorWidget,
  ...editorHoverWidget,
  ...editorSuggestWidget,
  ...editorLineNumber
}
