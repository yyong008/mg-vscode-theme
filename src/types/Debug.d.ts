export interface DebugConsole {
  infoForeground: ''
  warningForeground: ''
  errorForeground: ''
  sourceForeground: ''
  foreground: ''
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DebugToolBar {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DebugView {}
