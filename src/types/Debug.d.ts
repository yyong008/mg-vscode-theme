export interface DebugConsole {
  infoForeground: string
  warningForeground: string
  errorForeground: string
  sourceForeground: string
  foreground: string
}

export interface DebugConsoleInputIcon {
  infoForeground: string
  warningForeground: string
  errorForeground: string
  sourceForeground: string
  foreground: string
}

export interface DebugExceptionWidget {
  background: string
  border: string
}

export interface DebugIcon {
  breakpointForeground: string
  breakpointDisabledForeground: string
  breakpointUnverifiedForeground: string
  breakpointCurrentStackframeForeground: string
  breakpointStackframeForeground: string
  startForeground: string
  pauseForeground: string
  stopForeground: string
  disconnectForeground: string
  restartForeground: string
  stepOverForeground: string
  stepIntoForeground: string
  stepOutForeground: string
  continueForeground: string
  stepBackForeground: string
}

export interface DebugTokenExpression {
  name: string
  value: string
  string: string
  boolean: string
  number: string
  error: string
}

export interface DebugToolBar {
  background: string
  border: string
}

export interface DebugView {
  exceptionLabelForeground: string
  exceptionLabelBackground: string
  stateLabelForeground: string
  stateLabelBackground: string
  valueChangedHighlight: string
}
