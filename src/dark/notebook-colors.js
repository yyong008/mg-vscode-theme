import colors from '../designs/index.js'

/**
 * @type {import('../types/Notebook').Notebook}
 */
const notebook = () => ({
  ['notebook.editorBackground']: '',
  ['notebook.cellBorderColor']: '',
  ['notebook.cellHoverBackground']: '',
  ['notebook.cellInsertionIndicator']: '',
  ['notebook.cellStatusBarItemHoverBackground']: '',
  ['notebook.cellToolbarSeparator']: '',
  ['notebook.cellEditorBackground']: '',
  ['notebook.focusedCellBackground']: '',
  ['notebook.focusedCellBorder']: '',
  ['notebook.focusedEditorBorder']: '',
  ['notebook.inactiveFocusedCellBorder']: '',
  ['notebook.inactiveSelectedCellBorder']: '',
  ['notebook.outputContainerBackgroundColor']: '',
  ['notebook.outputContainerBorderColor']: '',
  ['notebook.selectedCellBackground']: '',
  ['notebook.selectedCellBorder']: '',
  ['notebook.symbolHighlightBackground']: ''
})

/**
 * @type {import('../types/Notebook').NotebookScrollbarSlider}
 */
const notebookScrollbarSlider = () => ({
  ['notebookScrollbarSlider.activeBackground']: '',
  ['notebookScrollbarSlider.background']: '',
  ['notebookScrollbarSlider.hoverBackground']: ''
})

/**
 * @type {import('../types/Notebook').NotebookStatusErrorIcon}
 */
const notebookStatusErrorIcon = () => ({
  ['notebookStatusErrorIcon.foreground']: ''
})

/**
 * @type {import('../types/Notebook').NotebookStatusRunningIcon}
 */
const notebookStatusRunningIcon = () => ({
  ['notebookStatusRunningIcon.foreground']: ''
})

/**
 * @type {import('../types/Notebook').NotebookStatusSuccessIcon}
 */
const notebookStatusSuccessIcon = () => ({
  ['notebookStatusSuccessIcon.foreground']: ''
})

export default {
  notebook,
  notebookScrollbarSlider,
  notebookStatusErrorIcon,
  notebookStatusRunningIcon,
  notebookStatusSuccessIcon
}
