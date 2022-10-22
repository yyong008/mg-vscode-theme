import colors from '../designs/index.js'
import { editorDebug } from './editor.js'

const debugToolBar = {
  ['debugToolBar.background']: '#1e1f1c',
  ['debugToolBar.border']: ''
}

const debugView = {
  ['debugView.exceptionLabelForeground']: '',
  ['debugView.exceptionLabelBackground']: '',
  ['debugView.stateLabelForeground']: '',
  ['debugView.stateLabelBackground']: '',
  ['debugView.valueChangedHighlight']: ''
}

const debugTokenExpression = {
  ['debugTokenExpression.name']: '',
  ['debugTokenExpression.value']: '',
  ['debugTokenExpression.string']: '',
  ['debugTokenExpression.boolean']: '',
  ['debugTokenExpression.number']: '',
  ['debugTokenExpression.error']: ''
}

export default {
  ...editorDebug,
  ...debugToolBar,
  ...debugView,
  ...debugTokenExpression
}
