export interface PeekView {
  border: string
}

export interface PeekViewEditor {
  background: string
  matchHighlightBackground: string
  matchHighlightBorder: string
}

export interface PeekViewEditorGutter {
  background: string
}

export interface PeekViewResult {
  background: string
  fileForeground: string
  lineForeground: string
  matchHighlightBackground: string
  selectionBackground: string
  selectionForeground: string
}

export interface PeekViewTitle {
  background: string
}

export interface PeekViewTitleDescription {
  foreground: string
}

export interface peekViewTitleLabel {
  foreground: string
}
