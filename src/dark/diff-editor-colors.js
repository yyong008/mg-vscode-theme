import colors from '../designs/index.js'

/**
 * @type {import('../types/DiffEditor').diffEditor}
 */
const diffEditor = {
  ['diffEditor.insertedTextBackground']: '#4b661680',
  ['diffEditor.removedTextBackground']: '#90274A70',
  ['diffEditor.removedTextBorder']: '',
  ['diffEditor.border']: '',
  ['diffEditor.diagonalFill']: '',
  ['diffEditor.insertedLineBackground']: '',
  ['diffEditor.removedLineBackgroundv']: ''
}

/**
 * @type {import('../types/DiffEditor').diffEditorGutter}
 */
const diffEditorGutter = {
  ['diffEditorGutter.insertedLineBackground']: '',
  ['diffEditorGutter.removedLineBackground']: ''
}

/**
 * @type {import('../types/DiffEditor').diffEditorOverview}
 */
const diffEditorOverview = {
  ['diffEditorOverview.insertedForeground']: '',
  ['diffEditorOverview.removedForeground']: ''
}
export default {
  ...diffEditor,
  ...diffEditorGutter,
  ...diffEditorOverview
}
