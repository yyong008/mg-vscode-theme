import colors from '../designs/index.js'

/**
 * @type {import('../types/PeekView').PeekView}
 */
const peekView = () => ({
  ['peekView.border']: colors.blueColors800
})

/**
 * @type {import('../types/PeekView').PeekViewEditor}
 */
const peekViewEditor = () => ({
  ['peekViewEditor.background']: '#272822',
  ['peekViewEditor.matchHighlightBackground']: '#75715E'
})

/**
 * @type {import('../types/PeekView').PeekViewResult}
 */
const peekViewResult = () => ({
  ['peekViewResult.background']: '#1e1f1c',
  ['peekViewResult.selectionBackground']: '#414339',
  ['peekViewResult.matchHighlightBackground']: '#75715E'
})

/**
 * @type {import('../types/PeekView').peekViewTitle}
 */
const peekViewTitle = () => ({
  ['peekViewTitle.background']: '#1e1f1c'
})

export default {
  peekView,
  peekViewEditor,
  peekViewResult,
  peekViewTitle
}
