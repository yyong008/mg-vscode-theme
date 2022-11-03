import colors from '../designs/index.js'

/**
 * @type {import('../types/Debug').DebugToolBar}
 */
const debugToolBar = () => ({
  ['debugToolBar.background']: colors.redColors400,
  ['debugToolBar.border']: ''
})

/**
 * @type {import('../types/Debug').DebugView}
 */
const debugView = () => ({
  ['debugView.exceptionLabelForeground']: '',
  ['debugView.exceptionLabelBackground']: '',
  ['debugView.stateLabelForeground']: '',
  ['debugView.stateLabelBackground']: '',
  ['debugView.valueChangedHighlight']: ''
})

/**
 * @type {import('../types/Debug').DebugTokenExpression}
 */
const debugTokenExpression = () => ({
  ['debugTokenExpression.name']: '',
  ['debugTokenExpression.value']: '',
  ['debugTokenExpression.string']: '',
  ['debugTokenExpression.boolean']: '',
  ['debugTokenExpression.number']: '',
  ['debugTokenExpression.error']: ''
})

/**
 * @type {import('../types/Debug').DebugIcon}
 */
const debugIcon = () => ({
  ['debugIcon.breakpointForeground']: '',
  ['debugIcon.breakpointDisabledForeground']: '',
  ['debugIcon.breakpointUnverifiedForeground']: '',
  ['debugIcon.breakpointCurrentStackframeForeground']: '',
  ['debugIcon.breakpointStackframeForeground']: '',
  ['debugIcon.startForeground']: '',
  ['debugIcon.pauseForeground']: '',
  ['debugIcon.stopForeground']: '',
  ['debugIcon.disconnectForeground']: '',
  ['debugIcon.restartForeground']: '',
  ['debugIcon.stepOverForeground']: '',
  ['debugIcon.stepIntoForeground']: '',
  ['debugIcon.stepOutForeground']: '',
  ['debugIcon.continueForeground']: '',
  ['debugIcon.stepBackForeground']: ''
})

/**
 * @type {import('../types/Debug').DebugConsole}
 */
const DebugConsole = () => ({
  ['debugConsole.infoForeground']: '',
  ['debugConsole.warningForeground']: '',
  ['debugConsole.errorForeground']: '',
  ['debugConsole.sourceForeground']: ''
})

/**
 * @type {import('../types/Debug').DebugConsoleInputIcon}
 */
const debugConsoleInputIcon = () => ({
  ['debugConsoleInputIcon.foreground']: ''
})

export default {
  debugToolBar,
  debugView,
  debugTokenExpression,
  debugIcon,
  DebugConsole,
  debugConsoleInputIcon
}
