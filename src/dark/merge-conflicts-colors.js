// import colors from '../designs/index.js'

/**
 * @type {import('../types/Merge').Merge}
 */
const merge = () => ({
  ['merge.currentHeaderBackground']: '',
  ['merge.currentContentBackground']: '',
  ['merge.incomingHeaderBackground']: '',
  ['merge.incomingContentBackground']: '',
  ['merge.border']: '',
  ['merge.commonContentBackground']: '',
  ['merge.commonHeaderBackground']: ''
})

/**
 * @type {import('../types/Merge').Merge}
 */
const editorOverviewRuler = () => ({
  ['editorOverviewRuler.currentContentForeground']: '',
  ['editorOverviewRuler.incomingContentForeground']: '',
  ['editorOverviewRuler.commonContentForeground']: ''
})

/**
 * @type {import('../types/Merge').MergeEditor}
 */
const mergeEditor = () => ({
  ['mergeEditor.change.background']: '',
  ['mergeEditor.change.word.background']: '',
  ['mergeEditor.conflict.unhandledUnfocused.border']: '',
  ['mergeEditor.conflict.unhandledFocused.border']: '',
  ['mergeEditor.conflict.handledUnfocused.border']: '',
  ['mergeEditor.conflict.handledFocused.border']: '',
  ['mergeEditor.conflict.handled.minimapOverViewRuler']: '',
  ['mergeEditor.conflict.unhandled.minimapOverViewRuler']: '',
  ['mergeEditor.conflictingLines.background:']: ''
})

export default {
  merge,
  editorOverviewRuler,
  mergeEditor
}
