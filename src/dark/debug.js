import colors from '../designs/index.js'

/**
 * @type {import('../types/Debug').DebugToolBar}
 */
const debugToolBar = {
  ['debugToolBar.background']: colors.redColors400,
  ['debugToolBar.border']: ''
}

/**
 * @type {import('../types/Debug').DebugView}
 */
const debugView = {
  ['debugView.exceptionLabelForeground']: '',
  ['debugView.exceptionLabelBackground']: '',
  ['debugView.stateLabelForeground']: '',
  ['debugView.stateLabelBackground']: '',
  ['debugView.valueChangedHighlight']: ''
}

/**
 * @type {import('../types/Debug').DebugTokenExpression}
 */
const debugTokenExpression = {
  ['debugTokenExpression.name']: '',
  ['debugTokenExpression.value']: '',
  ['debugTokenExpression.string']: '',
  ['debugTokenExpression.boolean']: '',
  ['debugTokenExpression.number']: '',
  ['debugTokenExpression.error']: ''
}

export default {
  ...debugToolBar,
  ...debugView,
  ...debugTokenExpression
}
