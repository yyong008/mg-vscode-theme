export interface Notebook {
  editorBackground: string
  cellBorderColor: string
  cellHoverBackground: string
  cellInsertionIndicator: string
  cellStatusBarItemHoverBackground: string
  cellToolbarSeparator: string
  cellEditorBackground: string
  focusedCellBackground: string
  focusedCellBorder: string
  focusedEditorBorder: string
  inactiveFocusedCellBorder: string
  inactiveSelectedCellBorder: string
  outputContainerBackgroundColor: string
  outputContainerBorderColor: string
  selectedCellBackground: string
  selectedCellBorder: string
  symbolHighlightBackground: string
}

export interface NotebookScrollbarSlider {
  activeBackground: string
  background: string
  hoverBackground: string
}

export interface NotebookStatusErrorIcon {
  foreground: string
}

export interface NotebookStatusRunningIcon {
  foreground: string
}

export interface NotebookStatusSuccessIcon {
  foreground: string
}
