export interface StatusBar {
  background: string
  foreground: string
  border: string
  debuggingBackground: string
  debuggingForeground: string
  debuggingBorder: string
  noFolderForeground: string
  noFolderBackground: string
  noFolderBorder: string
  focusBorder: string
}

export interface StatusBarItem {
  activeBackground: string
  hoverBackground: string
  prominentForeground: string
  prominentBackground: string
  prominentHoverBackground: string
  remoteBackground: string
  remoteForeground: string
  errorBackground: string
  errorForeground: string
  warningBackground: string
  warningForeground: string
  compactHoverBackground: string
  focusBorder: string
}
